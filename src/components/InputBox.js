import React from "react";
import OutlinedInput from '@mui/material/OutlinedInput';
import { Button } from "@mui/material";
import styles from './InputBox.module.css';

class InputBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: ''
        }
    };

    render() {
        return (
            <div className={styles['input-wrapper']}>
                <OutlinedInput className={styles['input-wrapper-box']} size="small" value={this.state.inputText} onChange={(event) => this.setState({
                    inputText: event.target.value
                })} />
                <Button onClick={() => this.props.handleInput(this.state.inputText)} variant="contained">
                    add
                </Button>
            </div>
        )
    }
};

export default InputBox;