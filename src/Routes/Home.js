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
            <p>
            Boy oh boy where do I even begin. Lebron.. honey, my pookie bear. I have loved you ever since I first laid eyes on you. 
            The way you drive into the paint and strike fear into your enemies eyes. Your silky smooth touch around the rim, and 
            that gorgeous jumpshot. I would do anything for you. I wish it were possible to freeze time so I would never have to 
            watch you retire. You had a rough childhood, but you never gave up hope. You are even amazing off the court, you're a 
            great husband and father, sometimes I even call you dad. I forvever dread and weep, thinking of the day you will one day 
            retire. I would sacrifice my ownlife it were the only thing that could puta smile on your beautiful face. You have given 
            me so much joy, and heartbreak over the years. I remember when you first left clevenland and its like my heart got broken 
            into a million pieces. But a tear still fell frommy right eye when I watched you win yourfirst ring in miami, because deep
            down,my glorious king deserved it. I just wanted you to return home. Then allas, you did, my sweet baby boy came home and I 
            rejoiced. 2015 was a hard year for us baby, but in 2016 you made history happen. You came back from 3-1 and I couldn't believe it.
            I was crying, bawling even, and I heard my glorious king exclaim these words, "CLEVELAND, THIS IS FOR YOU!" Not only have you 
            changed the game of basketball and the world forever, but you've eternally changed my world. And now you're getting older, 
            but still the goat, my goat. I love you pookie bear, my glorious king, Lebron James.
            </p>

        </div>
    );
}

