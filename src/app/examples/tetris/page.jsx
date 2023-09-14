import Tetris from './components/Tetris';


const Page = () => ( <Tetris />)

export async function generateMetadata({ params }) {
    return {
      title: 'Tetris',
    }
}

export default Page
