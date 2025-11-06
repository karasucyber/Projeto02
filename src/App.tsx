import { useState, useEffect } from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './components/ui/carousel';
import { 
  Shield, 
  Menu, 
  X as XIcon,
  Play,
  Clock,
  Award,
  Trophy,
  Target,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Car,
  Users,
  Droplet,
  Dumbbell,
  Wind,
  Lock,
  Coffee,
  Wifi
} from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState('monday');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    unit: ''
  });
  const [carouselApi, setCarouselApi] = useState<any>(null);

  // Schedule data for each day
  const scheduleData: Record<string, { morning?: string; afternoon?: string; evening?: string }> = {
    monday: {
      morning: '7h - 8h30',
      evening: '19h - 20h30'
    },
    tuesday: {
      afternoon: '12h - 13h30',
      evening: '18h - 19h30'
    },
    wednesday: {
      morning: '7h - 8h30',
      evening: '19h - 20h30'
    },
    thursday: {
      afternoon: '12h - 13h30',
      evening: '18h - 19h30'
    },
    friday: {
      morning: '7h - 8h30',
      evening: '19h - 20h30'
    },
    saturday: {
      morning: '9h - 10h30'
    }
  };

  // Auto-play carousel
  useEffect(() => {
    if (!carouselApi) return;

    const intervalId = setInterval(() => {
      carouselApi.scrollNext();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId);
  }, [carouselApi]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Obrigada! Entraremos em contato em breve para agendar sua aula experimental.');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="tracking-wider text-black">DEMIAN</div>
                <div className="text-xs text-gray-600">Jiu-Jitsu para Adultos</div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('video')} className="text-gray-700 hover:text-black transition-colors">
                Sobre
              </button>
              <button onClick={() => scrollToSection('instructor')} className="text-gray-700 hover:text-black transition-colors">
                Instrutor
              </button>
              <button onClick={() => scrollToSection('schedule')} className="text-gray-700 hover:text-black transition-colors">
                Horários
              </button>
              <button onClick={() => scrollToSection('myths')} className="text-gray-700 hover:text-black transition-colors">
                Mitos
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-black transition-colors">
                Contato
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-black hover:bg-gray-800 text-white"
              >
                Agendar Aula
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <XIcon className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col gap-4">
                <button onClick={() => scrollToSection('video')} className="text-left text-gray-700 hover:text-black transition-colors">
                  Sobre
                </button>
                <button onClick={() => scrollToSection('instructor')} className="text-left text-gray-700 hover:text-black transition-colors">
                  Instrutor
                </button>
                <button onClick={() => scrollToSection('schedule')} className="text-left text-gray-700 hover:text-black transition-colors">
                  Horários
                </button>
                <button onClick={() => scrollToSection('myths')} className="text-left text-gray-700 hover:text-black transition-colors">
                  Mitos
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-black transition-colors">
                  Contato
                </button>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-black hover:bg-gray-800 text-white w-full"
                >
                  Agendar Aula
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-20"></div>

      {/* Video Section */}
      <section id="video" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl lg:text-6xl mb-6 text-black">
              Jiu-Jitsu para Adultos na Escola Demian
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra como nossas aulas desenvolvem seu potencial através da arte suave
            </p>
          </div>

          {/* Video Placeholder with Play Button */}
          <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1555597673-b21d5c935865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqaXUlMjBqaXRzdSUyMGFkdWx0cyUyMHRyYWluaW5nfGVufDF8fHx8MTc2MjIyMDMyMHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Treino de Jiu-Jitsu para Adultos"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-10 h-10 text-black ml-1" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
              <h3 className="text-2xl text-white mb-2">Como Funciona o Treino para Adultos</h3>
              <p className="text-white/90">Veja como é uma aula típica e conheça nossa metodologia especializada</p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-4xl text-black mb-2">15+</div>
              <div className="text-gray-600">Anos de Experiência</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-4xl text-black mb-2">300+</div>
              <div className="text-gray-600">Alunos Ativos</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-4xl text-black mb-2">100%</div>
              <div className="text-gray-600">Ambiente Seguro</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-4xl text-black mb-2">2x</div>
              <div className="text-gray-600">Unidades</div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section id="instructor" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl text-black mb-4">
              Conheça Nossos Professores
            </h2>
            <p className="text-xl text-gray-600">
              Expertise e dedicação ao ensino do Jiu-Jitsu
            </p>
          </div>

          {/* Instructors Carousel */}
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full mb-16"
          >
            <CarouselContent>
              {/* Instructor 1 */}
              <CarouselItem>
                <Card className="overflow-hidden border-0 shadow-xl">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="h-96 md:h-auto">
                        <ImageWithFallback 
                          src="https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMGluc3RydWN0b3IlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjIyMjAzMjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                          alt="Prof. Carlos Demian"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-8 lg:p-12 bg-white flex flex-col justify-center">
                        <h3 className="text-3xl text-black mb-4">Prof. Carlos Demian</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          Faixa preta 4º grau com mais de 20 anos de experiência. Fundador da Escola Demian,
                          Carlos é reconhecido por sua técnica apurada e metodologia de ensino que forma campeões.
                        </p>
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                              <Trophy className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="text-black">Campeão Mundial IBJJF</div>
                              <div className="text-sm text-gray-600">2015, 2017, 2019</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                              <Award className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="text-black">Faixa Preta 4º Grau</div>
                              <div className="text-sm text-gray-600">Formado por Renzo Gracie</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                              <Target className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="text-black">Especialista em Competição</div>
                              <div className="text-sm text-gray-600">Preparador de atletas de elite</div>
                            </div>
                          </div>
                        </div>
                        <blockquote className="mt-8 border-l-4 border-black pl-4 italic text-gray-600">
                          "O Jiu-Jitsu transformou minha vida. Minha missão é compartilhar essa transformação."
                        </blockquote>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>

              {/* Instructor 2 */}
              <CarouselItem>
                <Card className="overflow-hidden border-0 shadow-xl">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="h-96 md:h-auto">
                        <ImageWithFallback 
                          src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMGluc3RydWN0b3IlMjBtYWxlfGVufDF8fHx8MTc2MjIyMDMyMHww&ixlib=rb-4.1.0&q=80&w=1080"
                          alt="Prof. Rafael Santos"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-8 lg:p-12 bg-white flex flex-col justify-center">
                        <h3 className="text-3xl text-black mb-4">Prof. Rafael Santos</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          Faixa preta 2º grau especializado em ensinar iniciantes. Rafael tem dom natural para
                          desmistificar técnicas complexas e tornar o aprendizado acessível para todos.
                        </p>
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                              <Trophy className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="text-black">Campeão Pan-Americano</div>
                              <div className="text-sm text-gray-600">2018, 2020, 2022</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                              <Award className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="text-black">Faixa Preta 2º Grau</div>
                              <div className="text-sm text-gray-600">Formado por Carlos Demian</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                              <Target className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="text-black">Especialista em Iniciantes</div>
                              <div className="text-sm text-gray-600">Método progressivo e eficaz</div>
                            </div>
                          </div>
                        </div>
                        <blockquote className="mt-8 border-l-4 border-black pl-4 italic text-gray-600">
                          "Todo mundo pode aprender Jiu-Jitsu. Basta dar o primeiro passo."
                        </blockquote>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>

              {/* Instructor 3 */}
              <CarouselItem>
                <Card className="overflow-hidden border-0 shadow-xl">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="h-96 md:h-auto">
                        <ImageWithFallback 
                          src="https://images.unsplash.com/photo-1713865467253-ce0ac8477d34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBpbnN0cnVjdG9yJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYyMjIwMzIwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                          alt="Profa. Mariana Lima"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-8 lg:p-12 bg-white flex flex-col justify-center">
                        <h3 className="text-3xl text-black mb-4">Profa. Mariana Lima</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          Faixa preta 3º grau e referência no Jiu-Jitsu feminino. Mariana traz uma perspectiva
                          única ao ensino, combinando técnica refinada com empatia e liderança.
                        </p>
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                              <Trophy className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="text-black">Campeã Mundial IBJJF</div>
                              <div className="text-sm text-gray-600">2016, 2019, 2021</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                              <Award className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="text-black">Faixa Preta 3º Grau</div>
                              <div className="text-sm text-gray-600">Formada pela Alliance</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                              <Target className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="text-black">Certificação Internacional</div>
                              <div className="text-sm text-gray-600">Women's Self-Defense Instructor</div>
                            </div>
                          </div>
                        </div>
                        <blockquote className="mt-8 border-l-4 border-black pl-4 italic text-gray-600">
                          "O Jiu-Jitsu me empoderou. Agora empodero outras pessoas todos os dias."
                        </blockquote>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>

              {/* Instructor 4 */}
              <CarouselItem>
                <Card className="overflow-hidden border-0 shadow-xl">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="h-96 md:h-auto">
                        <ImageWithFallback 
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMG1hbiUyMHNwb3J0c3xlbnwxfHx8fDE3NjIyMjAzMjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                          alt="Prof. Bruno Almeida"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-8 lg:p-12 bg-white flex flex-col justify-center">
                        <h3 className="text-3xl text-black mb-4">Prof. Bruno Almeida</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          Faixa preta 2º grau com foco em Jiu-Jitsu para adultos maduros e executivos. Bruno
                          entende as necessidades de quem busca qualidade de vida e defesa pessoal.
                        </p>
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                              <Trophy className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="text-black">Campeão Brasileiro Masters</div>
                              <div className="text-sm text-gray-600">2017, 2019, 2023</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                              <Award className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="text-black">Faixa Preta 2º Grau</div>
                              <div className="text-sm text-gray-600">Formado por Carlos Demian</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                              <Target className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="text-black">Especialista Masters +35</div>
                              <div className="text-sm text-gray-600">Treino adaptado e seguro</div>
                            </div>
                          </div>
                        </div>
                        <blockquote className="mt-8 border-l-4 border-black pl-4 italic text-gray-600">
                          "Nunca é tarde para começar. O importante é dar o primeiro passo."
                        </blockquote>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-white/90 hover:bg-white border-black" />
            <CarouselNext className="right-4 bg-white/90 hover:bg-white border-black" />
          </Carousel>

          {/* Championship Timeline */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-3xl text-black mb-2">Nossa História de Conquistas</h3>
              <p className="text-gray-600">Campeonatos vencidos pela Escola Demian ao longo dos anos</p>
            </div>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-12 left-0 right-0 h-1 bg-gray-300 hidden md:block"></div>
              
              {/* Timeline Items */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
                {/* 2015 */}
                <div className="relative">
                  <div className="bg-white border-2 border-black rounded-lg p-4 hover:shadow-xl transition-shadow">
                    <div className="w-6 h-6 bg-black rounded-full mx-auto mb-3 relative z-10"></div>
                    <div className="text-center">
                      <div className="text-2xl mb-2">🏆</div>
                      <div className="text-sm text-gray-500 mb-1">2015</div>
                      <div className="text-xs text-black">Mundial IBJJF</div>
                      <div className="text-xs text-gray-600 mt-1">1º lugar</div>
                    </div>
                  </div>
                </div>

                {/* 2017 */}
                <div className="relative">
                  <div className="bg-white border-2 border-black rounded-lg p-4 hover:shadow-xl transition-shadow">
                    <div className="w-6 h-6 bg-black rounded-full mx-auto mb-3 relative z-10"></div>
                    <div className="text-center">
                      <div className="text-2xl mb-2">🥇</div>
                      <div className="text-sm text-gray-500 mb-1">2017</div>
                      <div className="text-xs text-black">Pan-Americano</div>
                      <div className="text-xs text-gray-600 mt-1">2 ouros</div>
                    </div>
                  </div>
                </div>

                {/* 2018 */}
                <div className="relative">
                  <div className="bg-white border-2 border-black rounded-lg p-4 hover:shadow-xl transition-shadow">
                    <div className="w-6 h-6 bg-black rounded-full mx-auto mb-3 relative z-10"></div>
                    <div className="text-center">
                      <div className="text-2xl mb-2">🏅</div>
                      <div className="text-sm text-gray-500 mb-1">2018</div>
                      <div className="text-xs text-black">Brasileiro</div>
                      <div className="text-xs text-gray-600 mt-1">3 ouros</div>
                    </div>
                  </div>
                </div>

                {/* 2019 */}
                <div className="relative">
                  <div className="bg-white border-2 border-black rounded-lg p-4 hover:shadow-xl transition-shadow">
                    <div className="w-6 h-6 bg-black rounded-full mx-auto mb-3 relative z-10"></div>
                    <div className="text-center">
                      <div className="text-2xl mb-2">🏆</div>
                      <div className="text-sm text-gray-500 mb-1">2019</div>
                      <div className="text-xs text-black">Mundial IBJJF</div>
                      <div className="text-xs text-gray-600 mt-1">2 ouros</div>
                    </div>
                  </div>
                </div>

                {/* 2021 */}
                <div className="relative">
                  <div className="bg-white border-2 border-black rounded-lg p-4 hover:shadow-xl transition-shadow">
                    <div className="w-6 h-6 bg-black rounded-full mx-auto mb-3 relative z-10"></div>
                    <div className="text-center">
                      <div className="text-2xl mb-2">🥇</div>
                      <div className="text-sm text-gray-500 mb-1">2021</div>
                      <div className="text-xs text-black">Abu Dhabi Pro</div>
                      <div className="text-xs text-gray-600 mt-1">1º lugar</div>
                    </div>
                  </div>
                </div>

                {/* 2023 */}
                <div className="relative">
                  <div className="bg-white border-2 border-black rounded-lg p-4 hover:shadow-xl transition-shadow">
                    <div className="w-6 h-6 bg-black rounded-full mx-auto mb-3 relative z-10"></div>
                    <div className="text-center">
                      <div className="text-2xl mb-2">🏆</div>
                      <div className="text-sm text-gray-500 mb-1">2023</div>
                      <div className="text-xs text-black">Mundial Masters</div>
                      <div className="text-xs text-gray-600 mt-1">4 ouros</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Summary */}
              <div className="mt-12 grid grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="text-center p-6 bg-white rounded-lg border-2 border-gray-200">
                  <div className="text-4xl text-black mb-2">50+</div>
                  <div className="text-sm text-gray-600">Títulos Mundiais</div>
                </div>
                <div className="text-center p-6 bg-white rounded-lg border-2 border-gray-200">
                  <div className="text-4xl text-black mb-2">120+</div>
                  <div className="text-sm text-gray-600">Medalhas de Ouro</div>
                </div>
                <div className="text-center p-6 bg-white rounded-lg border-2 border-gray-200">
                  <div className="text-4xl text-black mb-2">15</div>
                  <div className="text-sm text-gray-600">Anos de História</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl text-black mb-4">
              Ambiente Escola Demian
            </h2>
            <p className="text-xl text-gray-600">
              Infraestrutura completa para sua melhor experiência
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Estacionamento */}
            <Card className="border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gray-100 group-hover:bg-black rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors">
                  <Car className="w-8 h-8 text-black group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl text-black mb-2">Estacionamento</h3>
                <p className="text-gray-600 text-sm">
                  Estacionamento gratuito e seguro para todos os alunos
                </p>
              </CardContent>
            </Card>

            {/* Tatame Olímpico */}
            <Card className="border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gray-100 group-hover:bg-black rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors">
                  <Shield className="w-8 h-8 text-black group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl text-black mb-2">Tatame Olímpico</h3>
                <p className="text-gray-600 text-sm">
                  Tatames profissionais e higienizados diariamente
                </p>
              </CardContent>
            </Card>

            {/* Vestiários */}
            <Card className="border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gray-100 group-hover:bg-black rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors">
                  <Droplet className="w-8 h-8 text-black group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl text-black mb-2">Vestiários</h3>
                <p className="text-gray-600 text-sm">
                  Vestiários completos com chuveiros e armários
                </p>
              </CardContent>
            </Card>

            {/* Armários */}
            <Card className="border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gray-100 group-hover:bg-black rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors">
                  <Lock className="w-8 h-8 text-black group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl text-black mb-2">Armários</h3>
                <p className="text-gray-600 text-sm">
                  Armários individuais com chave para guardar seus pertences
                </p>
              </CardContent>
            </Card>

            {/* Ar Condicionado */}
            <Card className="border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gray-100 group-hover:bg-black rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors">
                  <Wind className="w-8 h-8 text-black group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl text-black mb-2">Ar Condicionado</h3>
                <p className="text-gray-600 text-sm">
                  Ambiente climatizado para máximo conforto durante o treino
                </p>
              </CardContent>
            </Card>

            {/* Equipamentos */}
            <Card className="border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gray-100 group-hover:bg-black rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors">
                  <Dumbbell className="w-8 h-8 text-black group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl text-black mb-2">Equipamentos</h3>
                <p className="text-gray-600 text-sm">
                  Área de musculação complementar e equipamentos de treino
                </p>
              </CardContent>
            </Card>

            {/* Espaço Lounge */}
            <Card className="border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gray-100 group-hover:bg-black rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors">
                  <Coffee className="w-8 h-8 text-black group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl text-black mb-2">Espaço Lounge</h3>
                <p className="text-gray-600 text-sm">
                  Área de convivência com café e água para os alunos
                </p>
              </CardContent>
            </Card>

            {/* Wi-Fi */}
            <Card className="border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gray-100 group-hover:bg-black rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors">
                  <Wifi className="w-8 h-8 text-black group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl text-black mb-2">Wi-Fi Gratuito</h3>
                <p className="text-gray-600 text-sm">
                  Internet de alta velocidade disponível em toda a academia
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Carousel de Fotos */}
          <div className="mt-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              setApi={setCarouselApi}
              className="w-full"
            >
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="overflow-hidden rounded-2xl shadow-lg h-80">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1542937307-973ad1f0b10f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMHRyYWluaW5nJTIwbWF0JTIwZG9qb3xlbnwxfHx8fDE3NjIyMjA3NDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Tatame olímpico"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="overflow-hidden rounded-2xl shadow-lg h-80">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1544965819-473a800795fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsb2NrZXIlMjByb29tJTIwZml0bmVzc3xlbnwxfHx8fDE3NjIyMjA3NDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Vestiários modernos"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="overflow-hidden rounded-2xl shadow-lg h-80">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1580145644348-9266b5a5b6c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBwYXJraW5nJTIwZmFjaWxpdHl8ZW58MXx8fHwxNzYyMjIwNzQwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Estacionamento"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="overflow-hidden rounded-2xl shadow-lg h-80">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1761971976282-b2bb051a5474?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBmYWNpbGl0eSUyMGludGVyaW9yJTIwbW9kZXJufGVufDF8fHx8MTc2MjIyMDkwMHww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Interior da academia"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="overflow-hidden rounded-2xl shadow-lg h-80">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1670004810567-f4328dcc983e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwY2VudGVyJTIwZXF1aXBtZW50JTIwY2xlYW58ZW58MXx8fHwxNzYyMjIwOTAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Equipamentos"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="overflow-hidden rounded-2xl shadow-lg h-80">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1594027674775-5ed49697e1da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2pvJTIwdHJhaW5pbmclMjBmbG9vcnxlbnwxfHx8fDE3NjIyMjA5MDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Área de treino"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="overflow-hidden rounded-2xl shadow-lg h-80">
                    <ImageWithFallback 
                      src="https://images.unsplash.com/photo-1599121118834-14b8ab00020c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjByZWNlcHRpb24lMjBhcmVhfGVufDF8fHx8MTc2MjIyMDkwMXww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Recepção"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-2 bg-white/90 hover:bg-white border-black" />
              <CarouselNext className="right-2 bg-white/90 hover:bg-white border-black" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Myths Section */}
      <section id="myths" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl text-black mb-4">
              Quebrando Mitos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça a verdade sobre adultos no Jiu-Jitsu e derrube as barreiras que te impedem de começar
            </p>
          </div>

          {/* Video Placeholder */}
          <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl mb-12 group cursor-pointer">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1555597673-b21d5c935865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqaXUlMjBqaXRzdSUyMGFkdWx0cyUyMHRyYWluaW5nfGVufDF8fHx8MTc2MjIyMDMyMHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Quebrando Mitos"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/40 transition-colors">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-12 h-12 text-black ml-1" />
              </div>
            </div>
          </div>

          {/* Myths Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-2 border-gray-200 hover:border-black transition-colors">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6 pb-6 border-b border-gray-200">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <XIcon className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-2 tracking-wider">MITO</div>
                    <p className="text-lg text-gray-600 line-through">
                      "Sou velho demais para começar Jiu-Jitsu"
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-black mb-2 tracking-wider">REALIDADE</div>
                    <p className="text-lg text-gray-700">
                      É uma arte suave que prioriza técnica sobre força. Temos alunos de todas as idades,
                      e o treino é adaptado ao ritmo e capacidade de cada um.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-black transition-colors">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6 pb-6 border-b border-gray-200">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <XIcon className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-2 tracking-wider">MITO</div>
                    <p className="text-lg text-gray-600 line-through">
                      "Preciso estar em forma para começar"
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-black mb-2 tracking-wider">REALIDADE</div>
                    <p className="text-lg text-gray-700">
                      O treino te coloca em forma! Começamos do absoluto zero e progredimos juntos, 
                      respeitando o corpo e ritmo de cada aluno.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-black transition-colors">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6 pb-6 border-b border-gray-200">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <XIcon className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-2 tracking-wider">MITO</div>
                    <p className="text-lg text-gray-600 line-through">
                      "Vou me machucar facilmente"
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-black mb-2 tracking-wider">REALIDADE</div>
                    <p className="text-lg text-gray-700">
                      Segurança é nossa prioridade máxima. O treino é progressivo, controlado 
                      e supervisionado por instrutores experientes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-black transition-colors">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6 pb-6 border-b border-gray-200">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <XIcon className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-2 tracking-wider">MITO</div>
                    <p className="text-lg text-gray-600 line-through">
                      "Preciso ter experiência em lutas"
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-black mb-2 tracking-wider">REALIDADE</div>
                    <p className="text-lg text-gray-700">
                      Temos alunos de 18 a 65 anos, todos prosperando e evoluindo. 
                      Começamos do zero e desenvolvemos juntos, independente da experiência.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl text-black mb-4">
              Mais que um Treino, uma Família
            </h2>
            <p className="text-xl text-gray-600">
              Conheça a energia e o ambiente acolhedor das nossas aulas
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="col-span-2 md:col-span-2 row-span-2 overflow-hidden rounded-2xl shadow-lg">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1589860518300-9eac95f784d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwY29tbXVuaXR5JTIwd29tZW4lMjBzbWlsaW5nfGVufDF8fHx8MTc2MjIyMDMyMXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Comunidade unida"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="overflow-hidden rounded-2xl shadow-lg">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1602827114685-efbb2717da9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMHRyYWluaW5nJTIwZ3JvdXAlMjBqaXUlMjBqaXRzdXxlbnwxfHx8fDE3NjIyMjAzMjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Treino em grupo"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="overflow-hidden rounded-2xl shadow-lg">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1618876561985-ff3a14af4cf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGVtcG93ZXJtZW50JTIwc3BvcnRzfGVufDF8fHx8MTc2MjIyMDMyMnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Empoderamento feminino"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="col-span-2 overflow-hidden rounded-2xl shadow-lg">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1761630345037-0dbe2c3c55b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMG1hcnRpYWwlMjBhcnRzJTIwdHJhaW5pbmclMjB0b2dldGhlcnxlbnwxfHx8fDE3NjIyMjAzMjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Amigas treinando"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="overflow-hidden rounded-2xl shadow-lg">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1635962005506-28d7f1046ed6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMHRyYWluaW5nJTIwd29tZW58ZW58MXx8fHwxNzYyMjIwMzIyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Técnicas de Jiu-Jitsu"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl text-black mb-4">
              Horários Disponíveis
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Turmas para adultos com horários flexíveis
            </p>
            <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-lg shadow-md border border-gray-200">
              <MapPin className="w-5 h-5 text-black" />
              <span className="text-black">Vogue Square - Av. das Américas, 8585</span>
            </div>
          </div>

          {/* Day Selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {[
              { day: 'Segunda', key: 'monday' },
              { day: 'Terça', key: 'tuesday' },
              { day: 'Quarta', key: 'wednesday' },
              { day: 'Quinta', key: 'thursday' },
              { day: 'Sexta', key: 'friday' },
              { day: 'Sábado', key: 'saturday' }
            ].map((item) => (
              <Button
                key={item.key}
                variant="outline"
                onClick={() => setSelectedDay(item.key)}
                className={`px-6 py-3 border-2 transition-all ${
                  selectedDay === item.key
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-black border-gray-300 hover:border-black'
                }`}
              >
                {item.day}
              </Button>
            ))}
          </div>

          {/* Schedule Table */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100 border-b-2 border-gray-300">
                    <th className="px-6 py-4 text-left text-gray-700 border-r border-gray-300">
                      Período
                    </th>
                    <th className="px-6 py-4 text-center text-gray-700">
                      Horário
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {scheduleData[selectedDay].morning && (
                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-6 border-r border-gray-200 bg-gray-50">
                        <div className="text-black">Manhã</div>
                        <div className="text-xs text-gray-500">7h - 11h</div>
                      </td>
                      <td className="px-6 py-6 text-center">
                        <span className="inline-block px-6 py-3 bg-black text-white rounded text-lg">
                          {scheduleData[selectedDay].morning}
                        </span>
                      </td>
                    </tr>
                  )}
                  
                  {scheduleData[selectedDay].afternoon && (
                    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-6 border-r border-gray-200 bg-gray-50">
                        <div className="text-black">Tarde</div>
                        <div className="text-xs text-gray-500">12h - 18h</div>
                      </td>
                      <td className="px-6 py-6 text-center">
                        <span className="inline-block px-6 py-3 bg-black text-white rounded text-lg">
                          {scheduleData[selectedDay].afternoon}
                        </span>
                      </td>
                    </tr>
                  )}

                  {scheduleData[selectedDay].evening && (
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-6 border-r border-gray-200 bg-gray-50">
                        <div className="text-black">Noite</div>
                        <div className="text-xs text-gray-500">18h - 21h</div>
                      </td>
                      <td className="px-6 py-6 text-center">
                        <span className="inline-block px-6 py-3 bg-black text-white rounded text-lg">
                          {scheduleData[selectedDay].evening}
                        </span>
                      </td>
                    </tr>
                  )}

                  {!scheduleData[selectedDay].morning && 
                   !scheduleData[selectedDay].afternoon && 
                   !scheduleData[selectedDay].evening && (
                    <tr>
                      <td colSpan={2} className="px-6 py-12 text-center text-gray-400">
                        Nenhuma aula disponível neste dia
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-10">
            <p className="text-gray-500 text-sm mb-4">Turmas especializadas para adultos iniciantes e avançados</p>
            <Button 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="bg-black hover:bg-gray-800 text-white px-8 py-6"
            >
              Agendar Aula Experimental Gratuita
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl text-black mb-4">
              Comece Sua Jornada Hoje
            </h2>
            <p className="text-xl text-gray-600">
              Agende sua aula experimental <span className="text-black">100% gratuita</span>
            </p>
            <p className="text-gray-500 mt-2">
              Sem compromisso • Ambiente profissional e acolhedor • Todas as idades e níveis
            </p>
          </div>

          <Card className="border-2 border-gray-200 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-black text-lg mb-2 block">
                    Nome Completo *
                  </Label>
                  <Input 
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="border-2 border-gray-300 focus:border-black h-14"
                    placeholder="Como você gostaria de ser chamado(a)?"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email" className="text-black text-lg mb-2 block">
                      Email *
                    </Label>
                    <Input 
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="border-2 border-gray-300 focus:border-black h-14"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-black text-lg mb-2 block">
                      WhatsApp *
                    </Label>
                    <Input 
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="border-2 border-gray-300 focus:border-black h-14"
                      placeholder="(00) 00000-0000"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="unit" className="text-black text-lg mb-2 block">
                    Unidade Preferida *
                  </Label>
                  <Select value={formData.unit} onValueChange={(value) => setFormData({...formData, unit: value})}>
                    <SelectTrigger className="border-2 border-gray-300 focus:border-black h-14">
                      <SelectValue placeholder="Escolha a unidade mais próxima" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="vogue">Vogue Square - Barra da Tijuca</SelectItem>
                      <SelectItem value="barrinha">Barrinha - Barra da Tijuca</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-black hover:bg-gray-800 text-white h-16"
                >
                  Agendar Minha Aula Gratuita
                </Button>

                <p className="text-center text-sm text-gray-600">
                  🔒 Seus dados estão seguros conosco • Resposta em até 2 horas úteis
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Alternative Contact Methods */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">Prefere falar direto conosco?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+552130305673"
                className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-black text-black hover:bg-black hover:text-white transition-colors rounded-lg"
              >
                <Phone className="w-5 h-5" />
                (21) 3030-5673
              </a>
              <a 
                href="https://wa.me/5521999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-black text-black hover:bg-black hover:text-white transition-colors rounded-lg"
              >
                <Mail className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <Shield className="w-7 h-7 text-black" />
                </div>
                <div>
                  <div className="tracking-wider">DEMIAN</div>
                  <div className="text-xs text-gray-400">Jiu-Jitsu para Adultos</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Transformando vidas através do Jiu-Jitsu desde 2010.
              </p>
            </div>

            <div>
              <h3 className="text-sm tracking-wider mb-4">UNIDADES</h3>
              <div className="space-y-3 text-sm text-gray-400">
                <p>📍 Vogue Square - Av. das Américas, 8585</p>
                <p>📍 Barrinha - Est. da Barra da Tijuca, 426</p>
              </div>
            </div>

            <div>
              <h3 className="text-sm tracking-wider mb-4">HORÁRIOS</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p>⏰ Seg - Sex: 7h - 21h</p>
                <p>⏰ Sábado: 8h - 14h</p>
                <p>⏰ Domingo: 8h - 12h</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            <p>© 2025 Escola Demian - Todos os direitos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
