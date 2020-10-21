//server
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Phone = require('./phoneModel');
const MFG = require('./mfgModel');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
mongoose.connect(
  'mongodb+srv://derrick:derrick1234@node-server.yasnv.mongodb.net/products?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
);
app.listen(process.env.PORT || port, () =>
  console.log(`"API App LIstening at http://localhost:${port}`)
);

//ADD A NEW PHONE
app.post('/addPhone', (req, res) => {
  console.log(req.query);
  Phone.create(
    {
      name: req.query.name,
      cat: req.query.cat,
      price: req.query.price,
      qty: req.query.qty,
      mfg: req.query.mfg,
    },

    (err, phones) => {
      if (err) {
        console.log(err);
      }
      Phone.find((err, phones) => {
        if (err) {
          console.log(err);
        }
        res.json(phones);
      });
    }
  );
});

//GET ALL PHONES
app.get('/phones', (req, res) => {
  Phone.find((err, phone) => {
    if (err) {
      console.log(err);
    }
    res.json(phone);
  });
});
app.get('/', (req, res) => {
  Phone.find((err, phone) => {
    if (err) {
      console.log(err);
    }
    res.json(phone);
  });
});
//MODIFY EXISTING PRODUCT
app.put('/phone/:id', (req, res) => {
  Phone.findById(req.params.id, (err, phone) => {
    phone.updateOne(req.query, (err, phone) => {
      if (err) {
        console.log(err);
      }
      Phone.find((err, phone) => {
        if (err) {
          console.log(err);
        }
        res.json(phone);
      });
    });
  });
});

//DELETE A PHONE
app.delete('/phones/:id', (req, res) => {
  Phone.remove(
    {
      _id: req.params.id,
    },
    (err, phone) => {
      if (err) {
        console.log(err);
      }
      Phone.find((err, phone) => {
        if (err) {
          console.log(err);
        }
        res.json(phone);
      });
    }
  );
});

//ADD A NEW MANUFACTURER
app.post('/addmfg', (req, res) => {
  MFG.create(
    {
      name: req.query.name,
      address: req.query.address,
      phone: req.query.phone,
    },

    (err, mfg) => {
      if (err) {
        console.log(err);
      }
      MFG.find((err, mfg) => {
        if (err) {
          console.log(err);
        }
        res.json(mfg);
      });
    }
  );
});

// GET ALL MFG'S FOR VIEWING
app.get('/mfg', (req, res) => {
  MFG.find((err, mfg) => {
    if (err) {
      console.log(err);
    }
    res.json(mfg);
  });
});

//MODIFY A MANUFACTURER
app.put('/mfg/:id', (req, res) => {
  MFG.findById(req.params.id, (err, phone) => {
    MFG.updateOne(req.query, (err, phone) => {
      if (err) {
        console.log(err);
      }
      MFG.find((err, phone) => {
        if (err) {
          console.log(err);
        }
        res.json(phone);
      });
    });
  });
});

// DELETE A MANUFACTURERE BY ID
app.delete('/mfg/:id', (req, res) => {
  MFG.remove(
    {
      _id: req.params.id,
    },
    (err, mfg) => {
      if (err) {
        console.log(err);
      }
      MFG.find((err, mfg) => {
        if (err) {
          console.log(err);
        }
        res.json(mfg);
      });
    }
  );
});
app.get('/showmfg', (req, res) => {
  Phone.find({ cat: req.query.name })
    .populate('devices')
    .exec((err, devices) => {
      res.json(devices);
    });
});
