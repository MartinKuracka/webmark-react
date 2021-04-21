// Components
import Webs from './webs/webs';
import Components from './components/components';
import Templates from './templates/templates';
// Context API
import { WorksContext } from '../../../state_context/state_context';
import { useContext } from  'react';

const ContentSlider = () => {

    const {contenttype} = useContext(WorksContext);

    const SelectedContent = () => {
        switch (contenttype) {
            case 'webs':
                return <Webs />;
            case 'components': 
                return <Components />;
            case 'templates':
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