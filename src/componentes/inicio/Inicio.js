import Post from 'componentes/Post'
import './Inicio.css'
import posts from '../../assets/json/posts.json';

export const Inicio = () =>{
    return(
        <main>
            <ul className='posts'>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Post post={post} />
                    </li>
            ))}
        </ul>
        </main>

    )
}