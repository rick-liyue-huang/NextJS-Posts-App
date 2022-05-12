
import {MongoClient} from "mongodb";


export default async function(req, res) {
  if (req.method === 'POST') {
    const {email, name, message} = req.body;

    if (
      !email
      || !email.includes('@')
      || !name
      || name.trim() === ''
      || !message || message.trim() === ''
    ) {
      return res.status(400).json({message: 'invalid input'});
    }

    const newMessage = {
      email, name, message
    }
    console.log(newMessage);

    let client;

    // store the message in database
    try {
      client = await MongoClient.connect(`mongodb+srv://rick:passwordpassword@cluster0.oaqoo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);

    } catch (err) {
      res.status(500).json({message: 'could not connect database'})
    }

    const db = client.db();
    try {
      const result = await db.collection('message').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (err) {
      await client.close();
      res.status(500).json({message: 'store message failed'});
      return
    }


    res.status(201).json({message: 'successfully sent'})
  }
}
