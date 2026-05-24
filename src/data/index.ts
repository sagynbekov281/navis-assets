import mainBit from '../assets/mainBit.png'
import bit1 from '../assets/bit1.png'
import bit2 from '../assets/bit2.png'
import bit3 from '../assets/bit3.png'
import bit4 from '../assets/bit4.png'
import i18n from '../i18n'

export const getNewsArticles = () => {
  const t = i18n.t.bind(i18n)
  return [
    {
      id: 1,
      title: t('news.article1Title'),
      excerpt: t('news.article1Excerpt'),
      date: "15.04.2024",
      image: mainBit,
      content: t('news.article1Content'),
      tags: [t('news.article1Tag1'), t('news.article1Tag2'), t('news.article1Tag3')]
    },
    {
      id: 2,
      title: t('news.article2Title'),
      excerpt: t('news.article2Excerpt'),
      date: "02.04.2024",
      image: bit1,
      content: t('news.article2Content'),
      tags: [t('news.article2Tag1'), t('news.article2Tag2'), t('news.article2Tag3')]
    },
    {
      id: 3,
      title: t('news.article3Title'),
      excerpt: t('news.article3Excerpt'),
      date: "28.03.2024",
      image: bit2,
      content: t('news.article3Content'),
      tags: [t('news.article3Tag1'), t('news.article3Tag2'), t('news.article3Tag3')]
    },
    {
      id: 4,
      title: t('news.article4Title'),
      excerpt: t('news.article4Excerpt'),
      date: "20.03.2024",
      image: bit3,
      content: t('news.article4Content'),
      tags: [t('news.article4Tag1'), t('news.article4Tag2'), t('news.article4Tag3')]
    },
    {
      id: 5,
      title: t('news.article5Title'),
      excerpt: t('news.article5Excerpt'),
      date: "15.03.2024",
      image: bit4,
      content: t('news.article5Content'),
      tags: [t('news.article5Tag1'), t('news.article5Tag2'), t('news.article5Tag3')]
    },
    {
      id: 6,
      title: t('news.article6Title'),
      excerpt: t('news.article6Excerpt'),
      date: "10.03.2024",
      image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=400&h=250&fit=crop",
      content: t('news.article6Content'),
      tags: [t('news.article6Tag1'), t('news.article6Tag2'), t('news.article6Tag3')]
    }
  ]
}

export const getReviews = () => {
  const t = i18n.t.bind(i18n)
  return [
    { id: 1, name: t('reviews.review1Name'), date: '23.05.2024 12:30', rating: 4, text: t('reviews.review1Text') },
    { id: 2, name: t('reviews.review2Name'), date: '23.05.2024 12:30', rating: 4, text: t('reviews.review2Text') },
    { id: 3, name: t('reviews.review3Name'), date: '23.05.2024 12:30', rating: 3, text: t('reviews.review3Text') },
    { id: 4, name: t('reviews.review4Name'), date: '23.05.2024 12:30', rating: 4, text: t('reviews.review4Text') },
    { id: 5, name: t('reviews.review5Name'), date: '23.05.2024 12:30', rating: 4, text: t('reviews.review5Text') },
    { id: 6, name: t('reviews.review6Name'), date: '23.05.2024 12:30', rating: 4, text: t('reviews.review6Text') },
    { id: 7, name: t('reviews.review7Name'), date: '23.05.2024 12:30', rating: 3, text: t('reviews.review7Text') },
    { id: 8, name: t('reviews.review8Name'), date: '23.05.2024 12:30', rating: 4, text: t('reviews.review8Text') },
    { id: 9, name: t('reviews.review9Name'), date: '24.05.2024 09:15', rating: 5, text: t('reviews.review9Text') },
    { id: 10, name: t('reviews.review10Name'), date: '24.05.2024 11:00', rating: 5, text: t('reviews.review10Text') },
    { id: 11, name: t('reviews.review11Name'), date: '25.05.2024 14:20', rating: 4, text: t('reviews.review11Text') },
    { id: 12, name: t('reviews.review12Name'), date: '25.05.2024 16:45', rating: 5, text: t('reviews.review12Text') },
    { id: 13, name: t('reviews.review13Name'), date: '26.05.2024 10:30', rating: 4, text: t('reviews.review13Text') },
    { id: 14, name: t('reviews.review14Name'), date: '26.05.2024 13:00', rating: 5, text: t('reviews.review14Text') },
    { id: 15, name: t('reviews.review15Name'), date: '27.05.2024 08:50', rating: 4, text: t('reviews.review15Text') },
    { id: 16, name: t('reviews.review16Name'), date: '27.05.2024 17:10', rating: 5, text: t('reviews.review16Text') },
  ]
}

export const newsArticles = getNewsArticles()
export const reviews = getReviews()
