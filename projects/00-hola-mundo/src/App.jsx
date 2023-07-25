import './App.css';
import {TwitterFollowCard} from "./TwitterFollowCard.jsx";

const user =[
    {
        userName: 'fjmn2001',
        name: 'Francisco Marcano',
        isFollowing: true,
    },
    {
        userName: 'chmalo',
        name: 'Christian Fernandez',
        isFollowing: false,
    },
    {
        userName: 'ruprosperi',
        name: 'Ruben Prosperi',
        isFollowing: true,
    },
    {
        userName: 'zakibalbouze',
        name: 'Zaki Balbouze',
        isFollowing: false,
    }
]
export function App () {
    return (
        <section className="App">
            {
                user.map(({ userName, name, isFollowing}) =>(
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}>
                        {name}
                    </TwitterFollowCard>
                ))
            }
        </section>
    )
}