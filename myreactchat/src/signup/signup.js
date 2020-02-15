import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styles from './styles';
const firebase = require('firebase');

class SignupComponent extends React.Component {

        render() {

            const {classes} = this.props;

            return ( 
                <main className={classes.main}>
                    <CssBaseline></CssBaseline>
                    <Paper className={classes.paper}>
                    <Typography component='h1'variant='h5'>
                        Sign Up!
                    </Typography>
                    <form onSubmit={(e) => this.submitSignup(e)} className={classes.form}>
                    <FormControl require fulllWidth margin='normal'>
                        <InputLabel htmlFor='signup-email-input'>Enter Your Email</InputLabel>
                        <Input autoComplete='email' onChange={(e) => this.userTyping('email',e)} autoFocus id='signup-email-input' ></Input>
                    </FormControl>
                    </form>
                </Paper>
                </main>
            );
            }
            userTyping =  (type,e)=>{
                console.log(type,e);
                
            }
            submitSignup = (e) =>{
                console.log('SUBMITTING');
                
            }
        }
        export default withStyles(styles)(SignupComponent);