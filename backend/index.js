import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'

const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    database:"quotes"
})

app.use(express.json());
app.use(cors());

app.get("/", (req, res)=>{
    res.json("Welcome, Perry the Platypus");
})

app.get("/count", (req, res)=>{
    const q = "SELECT COUNT(*) FROM dr_doofenshmirtz";
    db.query(q, (err, result)=>{
        try{
            if(err) res.json(err);
            res.json(result)
        }catch(err){
            console.log(err);
        }
    })
})

app.post("/get-quote", (req, res)=>{
    const q = "SELECT quote FROM dr_doofenshmirtz WHERE id = ?";
    const id = req.body.id;
    db.query(q, id, (err, result)=>{
        try{
            if(err) res.json(err);
            res.json([result]);
        }catch(err){
            console.log(err);
        }
    })
})

app.listen(8800, ()=>{
    console.log("Connected to Backend");
})