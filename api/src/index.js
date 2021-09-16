import db from './db.js';
import express from 'express'
import cors from 'cors'

const app = express();
app.use(cors());

app.get('/matricula', async (req, resp) => {
    try {
        let matriculas = await db.tb_matricula.findAll() 
        resp.send(matriculas);   
    } catch (e) {
        resp.send({ erro: 'Ocorreu um erro!'})
    }
})

app.post('/matricula', async (req, resp) => {
    try{
        let novoAluno = req.body;

        let form = {
            nm_aluno: novoAluno.nome,
            nr_chamada: novoAluno.numero,
            nm_curso: novoAluno.nome,
            nm_turma: novoAluno.nome
        }

        let r = await db.tb_matricula.create(form);
        resp.send(r);


    } catch (e) {
        resp.send({ erro: 'Ocorreu um erro!'})
    }
})

app.delete('/matricula/:id', async (req, resp) => {
    try {
        let r = await db.tb_matricula.destroy({ where: {id_chat: req.params.id } })
        resp.sendStatus(200);
    } catch (e) {
        resp.send({ erro: e.toString() });
    }
})

app.put('/matricula/:id', async (req, resp) => {
    try {

    } catch (e) {
        resp.send({ erro: 'Ocorreu um erro!'})

})
app.listen(process.env.PORT,
            x => console.log (`Server up at port ${process.env.PORT}`))