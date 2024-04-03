import ScrollProgressBar from '../Components/ScrollProgressBar';
import UncontrolledExample from '../Components/Carousel'
import SimpleButton from '../Components/SimpleButton';
import MyForm from '../Routes/MyForm';

export default function Home(){
    return (
        <div>
            <ScrollProgressBar />
            <UncontrolledExample caption = "caption comes from the caption prop">
                <div><h1>
                    Here is a header
                </h1>
                This text comes from the components children</div>
            </UncontrolledExample>
            <br/>
            <SimpleButton/>
            <br/>
            <MyForm/>

            <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae <br /> 
                ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur <br />
                 aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum <br />
                  quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. <br />
                   Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem <br />
                   vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?" <br />
            </p>
        </div>
    );
}

