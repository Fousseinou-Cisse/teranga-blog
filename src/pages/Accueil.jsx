import ArticleCard from '../components/ArticleCard'
export default function Accueil(){
  return(
<>
<h1>Accueil du Blog</h1> 
<ArticleCard
title="Developeur Débutant"
body="j'aime  beacoup le cours de react." 
 />
 <ArticleCard
 title="la presion."
 body="on souffre de la pression de Mr.Diouf"
 />
 <ArticleCard
 title="Sécurité"
 body=" je suis passionné par la Cyber sécurité."
 />
 </>
  )
}