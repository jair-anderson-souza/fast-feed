const Recipient = require('../models/Recipient');

class RecipientController {

  async findAll(req, res) {
    const recipients = await Recipient.findAll();
    return res.json(recipients);
  }
}

module.exports = new RecipientController();