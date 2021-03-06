import Link from 'next/link';
import Layout from '../components/Layout';
import Counter from '../components/Counter';


const h1 = {
  fontSize: '72pt',
  fontWeight: 'bold',
  textAlign: 'right',
  letterSpacing: '-8px',
  color: '#f0f0f0',
  margin: '-40px 0px'
}


const p = {
  margin: '0px',
  color: '#666',
  fontSize: '16pt'
}


export default () => (
  <Layout header="Next" title="Top page.">
    <Counter />
    <hr />
    <Link href="./other"><button>
      go to Other &gt;&gt;
    </button></Link>
  </Layout>
);
