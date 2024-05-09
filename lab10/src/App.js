import Block from "./components/Blockk.js";
import img_1 from "./images/f3.png";
import img_2 from "./images/f3.png";
import img_3 from "./images/f5.png";


function App() {
  return (
    <div>
      <h2 className="txt">Что Вам необходимо?</h2>
      <div className="lab10_bl">
        <Block title="Первый блок" img={img_1} text='Lorem ipsum dolor sit amet consectetur adipisicing elit.'/>
        <Block title="Второй блок" img={img_2} text='Deserunt optio nobis deleniti temporibus eius unde natus inventore facere blanditiis!'/>
        <Block title="Третий блок" img={img_3} text='Excepturi enim recusandae similique ad aspernatur atque, culpa vitae soluta architecto.'/>
      </div>
    </div>
  );
}

export default App;
