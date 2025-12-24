import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const flowers = [
    { id: 1, name: 'Букет "Весенний"', price: '3 500 ₽', image: 'https://cdn.poehali.dev/projects/b24a4d87-b5bf-4a86-a0a8-37f341a21880/files/0ad74541-ed48-4462-ac55-168b770140ea.jpg' },
    { id: 2, name: 'Розы премиум', price: '5 200 ₽', image: 'https://cdn.poehali.dev/projects/b24a4d87-b5bf-4a86-a0a8-37f341a21880/files/c87b73ff-02ac-4a6e-b995-a7fb6c4e28e2.jpg' },
    { id: 3, name: 'Пионы нежные', price: '4 800 ₽', image: 'https://cdn.poehali.dev/projects/b24a4d87-b5bf-4a86-a0a8-37f341a21880/files/4448f131-d957-4821-968c-04a2b663e2af.jpg' },
    { id: 4, name: 'Букет "Радость"', price: '4 200 ₽', image: 'https://cdn.poehali.dev/projects/b24a4d87-b5bf-4a86-a0a8-37f341a21880/files/0ad74541-ed48-4462-ac55-168b770140ea.jpg' },
    { id: 5, name: 'Композиция "Мечта"', price: '6 500 ₽', image: 'https://cdn.poehali.dev/projects/b24a4d87-b5bf-4a86-a0a8-37f341a21880/files/c87b73ff-02ac-4a6e-b995-a7fb6c4e28e2.jpg' },
    { id: 6, name: 'Тюльпаны яркие', price: '2 900 ₽', image: 'https://cdn.poehali.dev/projects/b24a4d87-b5bf-4a86-a0a8-37f341a21880/files/4448f131-d957-4821-968c-04a2b663e2af.jpg' },
  ];

  const galleryImages = [
    'https://cdn.poehali.dev/projects/b24a4d87-b5bf-4a86-a0a8-37f341a21880/files/0ad74541-ed48-4462-ac55-168b770140ea.jpg',
    'https://cdn.poehali.dev/projects/b24a4d87-b5bf-4a86-a0a8-37f341a21880/files/c87b73ff-02ac-4a6e-b995-a7fb6c4e28e2.jpg',
    'https://cdn.poehali.dev/projects/b24a4d87-b5bf-4a86-a0a8-37f341a21880/files/4448f131-d957-4821-968c-04a2b663e2af.jpg',
    'https://cdn.poehali.dev/projects/b24a4d87-b5bf-4a86-a0a8-37f341a21880/files/0ad74541-ed48-4462-ac55-168b770140ea.jpg',
    'https://cdn.poehali.dev/projects/b24a4d87-b5bf-4a86-a0a8-37f341a21880/files/c87b73ff-02ac-4a6e-b995-a7fb6c4e28e2.jpg',
    'https://cdn.poehali.dev/projects/b24a4d87-b5bf-4a86-a0a8-37f341a21880/files/4448f131-d957-4821-968c-04a2b663e2af.jpg',
  ];

  const reviews = [
    { id: 1, name: 'Анна Петрова', text: 'Потрясающие букеты! Цветы свежие, композиции просто волшебные. Заказываю здесь постоянно!', rating: 5 },
    { id: 2, name: 'Михаил Соколов', text: 'Отличный сервис и качество. Доставили точно вовремя, жена была в восторге от букета!', rating: 5 },
    { id: 3, name: 'Елена Иванова', text: 'Очень красивые композиции и приятные цены. Рекомендую всем друзьям и знакомым!', rating: 5 },
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary flex items-center gap-2">
              <Icon name="Flower2" size={28} />
              FloraStyle
            </h1>
            <div className="hidden md:flex gap-6">
              {['home', 'catalog', 'about', 'gallery', 'reviews'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-gray-600'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'catalog' && 'Каталог'}
                  {section === 'about' && 'О компании'}
                  {section === 'gallery' && 'Галерея'}
                  {section === 'reviews' && 'Отзывы'}
                </button>
              ))}
            </div>
            <Button className="hidden md:flex">
              <Icon name="Phone" size={16} />
              <span className="ml-2">Связаться</span>
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-24 pb-16 px-4 bg-gradient-to-br from-pink-50 via-purple-50 to-orange-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Цветы, которые дарят
                <span className="text-primary"> эмоции</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Создаём уникальные букеты для особенных моментов. Свежие цветы, современный дизайн, доставка по городу.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="text-lg" onClick={() => scrollToSection('catalog')}>
                  Смотреть каталог
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  <Icon name="Phone" size={20} />
                  <span className="ml-2">+7 (999) 123-45-67</span>
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/b24a4d87-b5bf-4a86-a0a8-37f341a21880/files/0ad74541-ed48-4462-ac55-168b770140ea.jpg"
                alt="Красивый букет цветов"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наш каталог</h2>
            <p className="text-xl text-gray-600">Выберите букет для любого повода</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {flowers.map((flower, index) => (
              <Card
                key={flower.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={flower.image}
                  alt={flower.name}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{flower.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{flower.price}</span>
                    <Button>
                      <Icon name="ShoppingCart" size={18} />
                      <span className="ml-2">В корзину</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img
                src="https://cdn.poehali.dev/projects/b24a4d87-b5bf-4a86-a0a8-37f341a21880/files/c87b73ff-02ac-4a6e-b995-a7fb6c4e28e2.jpg"
                alt="О компании"
                className="rounded-3xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">О FloraStyle</h2>
              <p className="text-lg text-gray-600 mb-4">
                Мы — команда увлечённых флористов с 10-летним опытом создания незабываемых букетов.
                Наша миссия — дарить радость через красоту живых цветов.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Работаем только со свежими цветами от проверенных поставщиков. Каждая композиция —
                это произведение искусства, созданное с любовью и вниманием к деталям.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">10+</div>
                  <div className="text-gray-600">лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">5000+</div>
                  <div className="text-gray-600">букетов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">1200+</div>
                  <div className="text-gray-600">клиентов</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Галерея работ</h2>
            <p className="text-xl text-gray-600">Наши лучшие композиции</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl group cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={image}
                  alt={`Галерея ${index + 1}`}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <p className="font-bold text-lg">Композиция #{index + 1}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
        <div className="container mx-0">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-gray-600">Что говорят о нас</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card
                key={review.id}
                className="animate-fade-in hover:shadow-xl transition-shadow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{review.text}"</p>
                  <p className="font-bold">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Icon name="Flower2" size={24} />
                FloraStyle
              </h3>
              <p className="text-gray-400">Цветы, которые дарят эмоции</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <p className="text-gray-400 mb-2">+7 (999) 123-45-67</p>
              <p className="text-gray-400 mb-2">info@florastyle.ru</p>
              <p className="text-gray-400">г. Москва, ул. Цветочная, 12</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Режим работы</h4>
              <p className="text-gray-400 mb-2">Пн-Пт: 9:00 - 21:00</p>
              <p className="text-gray-400 mb-2">Сб-Вс: 10:00 - 20:00</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Мы в соцсетях</h4>
              <div className="flex gap-4">
                <Icon name="Instagram" size={24} className="cursor-pointer hover:text-primary transition-colors" />
                <Icon name="Facebook" size={24} className="cursor-pointer hover:text-primary transition-colors" />
                <Icon name="Twitter" size={24} className="cursor-pointer hover:text-primary transition-colors" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 FloraStyle. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;