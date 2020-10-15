### ApiServer With DataBase

[API SERVER](https://frozen-coast-94100.herokuapp.com/api/players)
<hr>
 Tracks Product Options of: Name, Category, Price, Qty, Manufacturer
<hr>

Tracks Manufacturer Options of: Name, Address, Phone, and Devices
<hr>
Your API must be able to handle the following operations:

Add new products: 
<br>
EndPointExample:
/addPhone?name=Razor&cat=nokia&price=300&qty=10&mfg=5f88d74773d1bbf81aab241d

```javascript
app.post('/addPhone', (req, res) => {
  console.log(req.query);
  Phone.create(
    {
      name: req.query.name,
      cat: req.query.cat,
      price: req.query.price,
      qty: req.query.qty,
      mfg: req.query.mfg, //Must be object ID for MFG
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
```
<br>
Modify existing products & Update Quantity.
updates anyfield available to a product (phone) that is passed in as a param.
<br>
EndPointExample:
/phone/5f88cb4fc24004f3fb373caf?price=1200
  
```javascript
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
```
<br>
Delete products:
<br>
EndPointExample:
/phones/5f88ae12a24c71ea34c71e59

```javascript
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
```
<br>
Update quantity:
<br>
EndPointExample:
/phone/5f88cb4fc24004f3fb373caf?qty=150

```javascript
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
```
<br>
Add new Manufactures:
<br>
EndPointExample:
/addmfg?name=Nokia&address=Some Where&phone=111-0000

```javascript
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
```
<br>
Modify existing manufactures:
<br>
EndPointExample:
/mfg/5f88c3bdfd2482f21d3fe57a?address=Cupertino California

```javascript
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
```
<br>
Delete existing manufactures:
<br>
EndPointExample:
/mfg/5f88ae12a24c71ea34c71e5a

```javascript
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
```
<br>
All products by manufacture:
<br>
EndPointExample:
/showmfg?name=apple

```javascript
app.get('/showmfg',(req, res)=>{
  Phone.find({ cat: req.query.name })
    .populate('devices')
    .exec((err, devices) => {
      res.json(devices)
    });
})
```
<br>
<hr>
Extra Get Routes:

```javascript
// GET ALL MFG'S FOR VIEWING
app.get('/mfg', (req, res) => {
  MFG.find((err, mfg) => {
    if (err) {
      console.log(err);
    }
    res.json(mfg);
  });
});

```
```javascript
//GET ALL PHONES
app.get('/phones', (req, res) => {
  Phone.find((err, phone) => {
    if (err) {
      console.log(err);
    }
    res.json(phone);
  });
});
```
