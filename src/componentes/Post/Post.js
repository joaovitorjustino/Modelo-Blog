import { useParams } from 'react-router-dom'
import './Post.css'
import posts from '../../assets/json/posts.json';
import PostModelo from 'componentes/PostModelo';
import Markdown from 'react-markdown';

export const Post = () => {
    
    const parametros = useParams();
    
    const post = posts.find((post) => {return post.id === Number(parametros.id);})

    if(!post) {return('')}
    
    return(
        <PostModelo fotoCapa={require(`assets/posts/${post.id}/capa.png`)} titulo={post.titulo}>
            <div className='post-markdown-container'>
            <Markdown>
                {post.texto}
            </Markdown>
            </div>
        </PostModelo>
    )
}