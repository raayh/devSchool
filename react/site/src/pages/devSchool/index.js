import React, { useState, useEffect, useRef } from 'react';

import Cabecalho from '../../componentes/Cabecalho/cabecalho';
import Menu from '../../componentes/Menu/menu';
import { Container, Conteudo } from './styled';

import LoadingBar from 'react-top-loading-bar'

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Api from '../../service/api';
const api = new Api();

export default function Index() {
    const loading = useRef(null);

    const[alunos, setAlunos] = useState([]);
    const[nome, setNome] = useState('');
    const[chamada, setChamada] = useState('');
    const[curso, setCurso] = useState('');
    const[turma, setTurma] = useState('');
    const[idAlterando, setIdAlterando] = useState(0);
    
    async function listar(){
        let r = await api.listar();
        setAlunos(r);
    }

    async function inserir(){
        loading.current.continuousStart();

        if(idAlterando == 0) {
            let r = await api.inserir(nome, chamada, curso, turma);
            loading.current.complete();

            if(r.erro) 
             toast.error(`${r.erro}`)
            else 
             toast.success('💕 Aluno inserido!');

        } else {
            let r = await api.alterar(idAlterando,nome, chamada, curso, turma);
            loading.current.complete();
            if(r.erro) 
                toast.info('Verifique as alterações, e tente novamente!')
            else 
                toast.dark('💕 Aluno Alterado!'); 

        }
        limparCampos();
        listar();   
    }

    function limparCampos() {
        setNome('');
        setChamada('');
        setCurso('');
        setTurma('');
        setIdAlterando(0);
    }

    async function remover(id){
        confirmAlert({
            title: 'Remover aluno',
            message: `Tem certeza que deseja remover o aluno ${id}?`,
            buttons: [ 
                {
                    label: 'Sim',
                    onClick: async () => {
                        let r = await api.remover(id);
                        if(r.erro)
                            toast.error(`${r.erro}`);
                        else {
                            toast.dark('💕 Aluno removido!')
                            listar();
                        }
                    }   
                },
                {
                    label: 'Não'
                }
            ]
        });
    }

    async function alterar(item){
        setNome(item.nm_aluno);
        setChamada(item.nr_chamada);
        setCurso(item.nm_curso);
        setTurma(item.nm_turma);
        setIdAlterando(item.id_matricula);        
    }


    //função chamada uma vez quando a tela abre
    useEffect(() => {
        listar();
    })
    
    return ( 
    <Container>
        <Menu/>
        <Conteudo>
            <Cabecalho />
            <ToastContainer />
            <LoadingBar color=" #E911C6" ref={loading} />
                    <div className="box-aluno"> 
                        <div className="titulo"> 
                            <div className="barra2"> </div>
                            <div> <b>{idAlterando == 0 ? "Novo Aluno" : "Alterando Aluno" + idAlterando }</b> </div>
                        </div>

                        <div className="container-form">  
                            
                            <div className="form">
                                <div className="label">Nome:</div>
                                <input className="input" type="text" value={nome} onChange={e => setNome(e.target.value)} ></input>
                            </div>
                            <div className="form">
                                <div className="label">Curso:</div>
                                <input className="input" type="text" value={curso} onChange={e => setCurso(e.target.value)}></input>
                            </div>
                            <div className="form">
                                <div className="label">Chamada:</div>
                                <input className="input" type="text" value={chamada} onChange={e => setChamada(e.target.value)}c ></input>
                            </div>
                            <div className="form">
                                <div className="label">Turma:</div>
                                <input className="input" type="text" value={turma} onChange={e => setTurma(e.target.value)}></input>
                            </div>
                            <button className="btn-cadastrar" onClick={inserir}> {idAlterando == 0 ? "Cadastrar" : "Alterar"} </button>
                        </div>
                    </div>

                    <div className="box-matriculados"> 
                        <div className="titulo"> 
                            <div className="barra2"> </div>
                            <div> Alunos Matriculados</div>
                        </div>

                    <table className ="tabela">
                        <thead>
                            <tr>
                                <th className="titulos"> ID </th>
                                <th className="titulos"> Nome </th>
                                <th className="titulos"> Chamada </th>
                                <th className="titulos"> Turma </th>
                                <th className="titulos"> Curso </th>
                                <th className="campo-acao"> </th>
                                <th className="campo-acao"> </th>
                            </tr>
                        </thead>
                
                        <tbody>

                            {alunos.map((item, i) =>
                             
                                <tr className={i % 2 == 0 ? "linha-alternada" : ""}>
                                    <td> {item.id_matricula} </td>
                                    <td title={item.nm_aluno}> {item.nm_aluno != null && item.nm_aluno.length >= 25
                                            ? item.nm_aluno.substr(0, 25) + '...'
                                            : item.nm_aluno}
                                    </td>
                                    <td> {item.nr_chamada} </td>
                                    <td> {item.nm_turma} </td>
                                    <td> {item.nm_curso} </td>
                                    <td className="campo-acao"> <button onClick={() => alterar(item)} > <img src="assets/images/edit.svg" alt="" /> </button> </td>
                                    <td className="campo-acao"> <button onClick={() => remover(item.id_matricula)}> <img src="assets/images/excluir.svg" alt="" /> </button> </td> 
                                </tr>

                            )}
                
                        </tbody>
                        
                    </table>
                </div>             
            
        </Conteudo>

    </Container>
  
    )
}