import { NextPage } from "next"
import { useState } from "react";
import styled from "styled-components"
import { Container, H1, P, PulseLalbel, RedirectRouter } from "../components"
import { InputAllInfoCad } from "../components/input";
import { Layout } from "../components/layout/layout.component";

const Title = "Parabéns pela sua decisão em deixar de fumar !";

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
`;


const Cad: NextPage = () => {

    const [cigarrtesPerDay, setCigaretsPerDay] = useState(0);

    return (
        <Layout>
            <Section>
                <H1>
                    {Title}
                </H1>
                <P>
                    Quando deixou de fumar:
                </P>
                <PulseLalbel>
                    {new Date().toDateString()}
                </PulseLalbel>
                <InputAllInfoCad
                    value={cigarrtesPerDay}
                    onChange={setCigaretsPerDay}
                    type="number" label="Cigarros fumados por dia"
                />
            </Section>
        </Layout>
    )
}

export default Cad;