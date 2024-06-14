import { Link } from 'react-router-dom'
import './PostCard.css'
import BotaoPrincipal from 'componentes/BotaoPrincipal'

export const PostCard = ({ post }) => {
    return (
        <Link to={`/posts/${post.id}`}>
            <div className='post'>
                <img className='capa' src={require(`assets/posts/${post.id}/capa.png`)} alt='img de capa do post'/>
                <h2 className='titulo1'>{post.titulo}</h2>
                <BotaoPrincipal>Ler</BotaoPrincipal>
            </div>
        </Link>
    )
}