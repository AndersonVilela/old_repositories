import './App.css';
import github from './images/logo-github.png';
import { useState } from 'react';
import  axios from 'axios';



function App() {

  const [search, setSearch] = useState("");
  const [name, setName] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [avatar, setAvatar] = useState("");
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(false);

  const handleSearch = () => {
    axios
      .get(`https://api.github.com/users/${search}`)
      .then(response => {
        setName(response.data.name);
        setFollowers(response.data.followers);
        setFollowing(response.data.following);
        setAvatar(response.data.avatar_url);
      });

    setShow1(!show1);
    setShow2(!show2)
  }
  const most = `https://github-readme-stats.vercel.app/api/top-langs/?username=${search}&layout=compact&hide_border=true&title_color=00bfbf&text_color=00bfbf&bg_color=fffafa;`
    
  return (
    <div className="container">
      <section className='box'>
        <div className='inicial' style={{display: show1 ? 'flex' : 'none'}}>
          <img src={github} className='logo' alt='Logo do github' />
          <input 
          onChange={(e) => setSearch(e.target.value)} 
          type='text' 
          className='pesquisa' 
          placeholder='Digite seu nome de usuário'
          />
          <button 
          type='button' 
          className='btn'
          onClick={handleSearch}>Enviar</button>
        </div> 
        
        <div className='information' style={{display: show2 ? 'flex' : 'none'}} >       
          <img src={avatar} alt='iamgem de perfil' className='perfil' />
          <h1 className='nickname'>{name}</h1>
          <div className='informations'>
            <div className='numerations'>
              <div className='followers'>
                <span className='titles'>Seguidores</span>
                <h1 className='number'>{followers}</h1>
              </div>
              <div className='following'>
                <span className='titles'>Seguindo</span>
                <h1 className='number'>{following}</h1>
              </div>
            </div>
            <img src={most} alt='linguagens utilizadas' className='most-languages' />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
