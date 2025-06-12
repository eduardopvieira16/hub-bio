import Footer from '@/components/Footer'
import LinkButton from '@/components/LinkButton'
import Profile from '@/components/Profile'
import SocialLinks from '@/components/SocialLinks'

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-50 via-white to-pink-50 py-8 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="w-full max-w-md mx-auto relative z-10">
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 space-y-8 animate-fade-in">
          <Profile
            avatarUrl="/public/avatar.jpg"
            username="@elainepagnoncelli"
            bio="Transformando vidas através do propósito ✨"
          />

          <div className="space-y-4">
            <LinkButton
              href="https://wa.link/xo7w46"
              title="Loja Ella Tem Propósito"
              subtitle="Produtos com propósito para sua vida"
            />

            <LinkButton
              href="https://wa.link/ml8k7h"
              title="Salão Elaine Pagnoncelli Hub Studio"
              subtitle="Cuidando da sua beleza"
            />

            <LinkButton
              href="https://www.youtube.com/@elainepagnoncelli"
              title="Devocionais"
              subtitle="Palavra diária para sua alma"
            />
          </div>

          <SocialLinks
            instagram="https://www.instagram.com/elainepagnoncelli/"
            youtube="https://www.youtube.com/@elainepagnoncelli"
            instagram2="https://www.instagram.com/ellatemproposito/"
          />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Index
