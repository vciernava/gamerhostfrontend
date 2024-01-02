import Benefits from '@/components/Benefits';
import Categories from '@/components/Categories';
import MainHeader from '@/components/MainHeader';
import MinecraftProducts from '@/components/MinecraftProducts';
import SocialsBar from '@/components/SocialsBar';

export default function Home() {
  return (
    <>
      <SocialsBar />
      <MainHeader />
      <Benefits />
      <Categories />
      <MinecraftProducts />
    </>
  );
}
