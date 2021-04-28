// Components
import Webs from './webs/webs';
import Components from './components/components';
import Templates from './templates/templates';
// Context API
import { WorksContext } from '../../../works_context/works_context';
import { useContext } from  'react';

const ContentSlider = () => {

    const {contenttype} = useContext(WorksContext);

    const SelectedContent = () => {
        switch (contenttype) {
            case 'websites':
                return <Webs />;
            case 'Components': 
                return <Components />;
            case 'Web Apps':
                return <Templates />;
            default:
                return null
        }
    }
    return (
        <SelectedContent />        
    )
}

export default ContentSlider;