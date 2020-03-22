const Recipient = require('../models/Recipient');
const Yup = require('yup');

const schema = Yup.object().shape({
  name: Yup.string().required(),
  address: Yup.string().required(),
  number: Yup.string().required(),
  addressDetails: Yup.string().required(),
  state: Yup.string().required(),
  city: Yup.string().required(),
  postalCode: Yup.string().required()
});

class RecipientController {

  async findAll(req, res) {
    const recipients = await Recipient.findAll();
    return res.json(recipients);
  }

  async store(req, res) {
    if (!await schema.isValid(req.body)) {
      return res.status(401).json({ msg: 'Fields must be filled' });
    }
    const recipient = await Recipient.create(req.body);
    return res.json(recipient);
  }

  async update(req, res) {
    const { id } = req.params;
    
    if (!await schema.isValid(req.body)) {
      return res.status(401).json({ msg: 'Fields must be filled' });
    }
    const recipients = await Recipient.update(req.body, { where: { id : id} });
    return res.json(recipients);
  }

  async delete(req, res) {
    const { id } = req.params;
    const recipient = await Recipient.destroy({ where: { id } })
    return res.json(recipient);
  }

}

module.exports = new RecipientController();