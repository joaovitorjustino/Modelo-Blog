import PostCard from 'componentes/PostCard'
import './Inicio.css'
import posts from '../../assets/json/posts.json';

export const Inicio = () =>{
    return(
        <main>
            <ul className='posts'>
                {posts.map((post) => (
                    <li key={post.id}>
                        <PostCard post={post} />
                    </li>
            ))}
        </ul>
        </main>

    )
}