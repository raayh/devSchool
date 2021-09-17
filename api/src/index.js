import db from './db.js';
import express from 'express'
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());

app.get('/matricula', async (req, resp) => {
    try {
        let alunos = await db.tb_matricula.findAll({order: [['id_matricula', 'desc']] }); 
        resp.send(alunos);   
    } catch (e) {
        resp.send({ erro: 'Ocorreu um erro!'})
    }
})

app.post('/matricula', async (req, resp) => {
    try{
        let {nome, chamada, curso, turma} = req.body;

        let validacao = await db.tb_matricula.findOne({where: {nr_chamada:chamada, nm_aluno: nome}})

        if(nome == '')
            return resp.send({ erro: 'O campo nome é obrigatório!' });
        
        if(chamada == '')
            return resp.send({ erro: 'O campo chamada é obrigatório!' });
        if(chamada <=0)
            return  resp.send({ erro: 'O número da chamada deve ser positivo!'})
        
        if(curso == '')
            return resp.send({ erro: 'O campo curso é obrigatório!' });
        
        if(turma == '')
            return resp.send({ erro: 'O campo turma é obrigatório!' });


        if(validacao != null)
            return resp.send({ erro: 'O aluno inserido já existe!'});
        else {
            let r = await db.tb_matricula.create({
                nm_aluno: nome,
                nr_chamada: chamada,
                nm_curso: curso,
                nm_turma: turma
            });
            resp.send(r);
        }

    } catch (e) {
        resp.send({ erro: 'Ocorreu um erro!'})
    }
})

app.put('/matricula/:id', async (req, resp) => {
    try {
        let {nome, chamada, curso, turma} = req.body;
        let {id} = req.params;

        let r = await db.tb_matricula.update(
            {
                nm_aluno: nome,
                nr_chamada: chamada,
                nm_curso: curso,
                nm_turma: turma
            },
            {
                where: {id_matricula: id}
            }
        );
        resp.sendStatus(200);

    } catch (e) {
        resp.send({ erro: 'Ocorreu um erro!'})
    }

})

app.delete('/matricula/:id', async (req, resp) => {
    try {
        let {id} = req.params;
        
        let r = await db.tb_matricula.destroy({ where: {id_matricula: id } })
        resp.sendStatus(200);
    } catch (e) {
        resp.send({ erro: e.toString() });
    }
})

app.listen(process.env.PORT,
            x => console.log (`Server up at port ${process.env.PORT}`))