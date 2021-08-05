import { Card, CardActions, CardContent, CardHeader, Container, IconButton, Typography } from '@material-ui/core';
import './Definitions.css';
import StarIcon from '@material-ui/icons/Star';


const Definitions = (props) => {
    const { meanings, word, category, lightMode} = props;
    
  

    return (
        <Container className="meanings">
            {
                meanings[0] && word && category === "en" && (
                    <audio
                        src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
                        style={{ backgroundColor: "#fff", borderRadius: "10px" }}
                        controls
                    >
                        Your Browser doesn't support audio element.
                    </audio>

                )
            }
            {
                word.length == 0 ? <span className="subTitle"> Start by typing a word in Search</span>
                    : (

                        meanings.map((mean) => {
                            return (

                                mean.meanings.map((item) => {
                                    return (


                                        item.definitions.map((def, index) => {
                                            return (

                                                <Card key={index} className="card" style={{
                                                    backgroundColor: lightMode ? "#3b5360" : "white", color: lightMode ? "white" : "black"
                                                }}>
                                                    
                                                    <CardContent>
                                                        <Typography variant="h5"> {def.definition} </Typography>
                                                        <hr />
                                                        {
                                                            def.example && (
                                                                <Typography variant="body2" color={lightMode ? "white" : "textSecondary"}>
                                                                    Example: {def.example}
                                                                </Typography>
                                                            )
                                                        }
                                                        
                                                    </CardContent>



                                                </Card>
                                            )
                                        }))


                                })

                            )

                        })


                    )
            }
        </Container>
    );
}

export default Definitions;