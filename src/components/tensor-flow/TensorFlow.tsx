import * as React from 'react';
import * as toxicity from '@tensorflow-models/toxicity';

import { Wrapper, Hr, Button, Textarea, H1, P, A, Response } from './styled'

const threshold = 0.9;
const labelsToInclude = ['toxicity', 'severe_toxicity', 'identity_attack', 'insult', 'threat', 'sexual_explicit', 'obscene'];

interface tfResult {
    match: boolean,
    probabilities: Float32Array,
}

interface tfPrediction {
    label: string,
    results: Array<tfResult>,
};

type tfPredictions = Array<tfPrediction>;

export default function TensorFlow() {
    const [value, setValue] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [response, setResponse] = React.useState("");

    const analyze = async (value: string) => {
        setLoading(true);
        const model = await toxicity.load(threshold, labelsToInclude);
        const predictions: tfPredictions = await model.classify([value]);
        const readablePredictions = predictions
            .map((prediction: tfPrediction) => 
                prediction.results[0].match ? 
                    `${prediction.label}(${prediction.results[0].probabilities[1].toString().substring(0, 4)})` 
                    : null
            )
            .filter(Boolean);
        if(readablePredictions.length) {
            if(readablePredictions.length === 1) setResponse(`Your sentence contains: ${readablePredictions[0]}`);
            else {
                const last = readablePredictions.pop();
                setResponse(`Your sentence contains: ${readablePredictions.join(', ')} and ${last}`);
            }
        } else {
            setResponse("That's doesn't sound too offensive.");
        }
        setLoading(false);
    }

    return (
        <Wrapper>
            <H1>TF based offensive sentence analyzer.</H1>
            <Hr/>
            <P>This page is using <A href="https://www.tensorflow.org/js" target="_blank">TensorFlow.JS</A> to do a NLP analysis.</P>
            <P>The <A href="https://github.com/tensorflow/tfjs-models/tree/master/toxicity" target="_blank">Toxicity model</A> is available pre-trained.</P>
            <div>
                <Textarea
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    placeholder="Let's see if we can detect any kind of offensive language in your sentence."
                    name="text"
                    rows="6"
                ></Textarea>
            </div>
            <Button disabled={loading} onClick={e=> analyze(value)}>{loading ? 'Analyzing...' : 'Analyze my sentence'}</Button>
            <Response> {response} </Response>
        </Wrapper>
    )
}
