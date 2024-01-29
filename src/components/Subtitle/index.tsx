import { Container } from "./Subtitle.styles";

interface SubtitleProps{
    title: string
    subtitle: string
}

export function Subtitle(props: SubtitleProps){
    return(
        <Container>
            <span> {props.title} </span>
            <h3> {props.subtitle} </h3>
        </Container>
    )
}