import {Autocomplete, Button, Card, CardActions, CardContent, Grid, TextField, Typography} 
from "@mui/material";
import {Row, Col, Container} from "react-bootstrap";

const MuiPage = (props: any) => {

    const fancyButtonClick = (text: string) => () => {
        alert(text);
    };

    const items = [
        "Пушкин",
        "Некрасов"
    ];
    return <>
        <Grid container={true} spacing={10}>

            <Grid item={true} xs={3}
                  md={7}>
                <Button
                    variant={'contained'}
                    onClick={fancyButtonClick('ура')}>Я кнопка</Button>
                <Button variant={'outlined'} onClick={fancyButtonClick('ура')}>И я кнопка</Button>
                <Button variant={'text'} onClick={fancyButtonClick('ура')}>И даже я</Button>
            </Grid>


            <Grid item={true} xs={9}
                  md={5}>
                <Card sx={{minWidth: 275}}>
                    <CardContent>
                        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                            Привет я текст
                        </Typography>
                        <Typography variant="h2" component="div">
                            Могу быть вот такми
                        </Typography>
                        <Typography sx={{mb: 1.5}} color="text.secondary">
                            или меньще
                        </Typography>

                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={() => alert('Спасибо!')}>Нажми меня</Button>
                    </CardActions>
                </Card>

            </Grid>
            <Grid item={true} xs={12} md={3}>
                <Autocomplete
                    options={items}
                    renderInput={(params) => <TextField {...params} label="Введите фамилию"/>}
                    />
            </Grid>
        </Grid>
        <Container>
            <Row >
                <Col style={{background:'red'}} xs={4} lg={1} md={6} >Я Один блок</Col>
                <Col style={{background:'green', color:'white'}} xs={8} lg={6} >Я второй блок</Col>
            </Row>
            <Row >
                <Col style={{background:'purple'}} xs={5} lg={6}  >Я Один блок</Col>
                <Col style={{background:'green', color:'blue'}} xs={5} lg={6} >Я второй блок</Col>
            </Row>
        </Container>
    </>;



};
export default MuiPage;