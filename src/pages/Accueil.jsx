import {useState} from "react"
import ListeArticles from "../components/ListeArticles"
import CommentaireForm from "../components/CommentaireForm"
import BarreRecherche from "../components/BarreRecherche"
import ListeCommentaires from "../components/ListeCommentaires"
const ARTICLES_INITIAUX =[
  {
    id:1,
    title:"Developeur Débutant",
    body:"j'ai beacoup le cours de react.",
  },
  {
    id:2,
     title:"la presion.",
     body:"on souffre de la presion de Mr.Diouf",
  },
  {
    id:3,
     title:"Sécurité",
     body:" je suis pationné par la Cyber sécurité.",
  },
]
export default function Accueil(){
const [favorisParId, setFavorisParId] = useState({})
  const [recherche, setRecherche] = useState("")
  const [commentaire, setCommentaire] = useState([])

  function basculerFavori(articleId){
    setFavorisParId(etatActuel =>({
      ...etatActuel,
      [articleId]:!etatActuel[articleId],
    }))
  }


  function ajouterCommentaire(nouveauCommentaire) {
    setCommentaire(anciensCommentaires => [
      ...anciensCommentaires,
      nouveauCommentaire,
    ])
  }
const nombreFavori = Object.values(favorisParId).filter(Boolean).length
  const articlesFiltres = ARTICLES_INITIAUX.filter(article =>
  article.title.toLowerCase().includes(recherche.toLowerCase())
)
  return(
<>
<h1>Accueil du Blog</h1> 
<p>Nombre d&apos;articles en favori : {nombreFavori}</p>
<BarreRecherche
recherche={recherche}
onChangeRecherche={setRecherche}
/>

<ListeArticles
  articles={articlesFiltres}
  favoris={favorisParId}
  onToggleFavori={basculerFavori}
/>
<CommentaireForm onAjouterCommentaire={ajouterCommentaire} />
<ListeCommentaires commentaires={commentaire} />
 </>
  )
}