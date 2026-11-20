import { useState } from "react"
import ArticleCard from "../components/ArticleCard"
export default function Accueil(){
  const [favoris, setFavori] =useState([false, false, false])

  function basculerFavori(index) {
    setFavori(etatActuel =>
      etatActuel.map((valeur, i) => (i === index ? !valeur : valeur))
    )}

const nombreFavoris = favoris.filter(Boolean).length
return (
    <>
      <h1>Accueil du Blog</h1>
      
      <p>Nombre d'articles en favori : {nombreFavoris}</p>
      
      <ArticleCard 
        title="Developpeur debutant" 
        body="j'aime beaucoup le cours de react." 
        estFavori={favoris[0]}
        onToggleFavori={() => basculerFavori(0)}
      />
      <ArticleCard 
        title="Sécurité" 
        body="Je suis pationné par la CyberSécurité ." 
        estFavori={favoris[1]}
        onToggleFavori={() => basculerFavori(1)}
      />
      <ArticleCard 
        title="Réseaux Informatique" 
        body="Je dois comprendre les bases de réseau pour bien faire la CyberSécurité ." 
        estFavori={favoris[2]}
        onToggleFavori={() => basculerFavori(2)}
      />
    </>
  )
}
