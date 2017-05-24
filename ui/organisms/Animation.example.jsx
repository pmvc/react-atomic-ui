import React,{Component} from 'react'; 

/**
 * Production please use
 * import Animate from "organism-react-animate"
 */
import Animate from "organism-react-animate"

const hello = (<div>Hello world!!</div>);

class AnimationExample extends Component
{
    constructor(props) 
    {
        super(props);
        this.state = {
            text: hello 
        };
    }

    render()
    {
        return (
            <div>
                <Animate
                    appear="fadeInLeft"
                    enter="fadeInRight-100"
                    leave="fadeOutRight-1000"
                >
                {this.state.text}    
                </Animate>
                <a href="#" onClick={(()=>{
                    this.setState({
                        text: null
                    });
                }).bind(this)}>leave</a>
                <a href="#" 
                    style={{marginLeft:'10px'}}
                    onClick={(()=>{
                        this.setState({
                            text: hello 
                        });
                    }).bind(this)}
                >enter</a>
            </div>
        );
    }
}

export default AnimationExample;
