import Webs from './webs/webs';
import Components from './components/components';
import Templates from './templates/templates';

const ContentSlider = ({contenttype, setContent}) => {

    const SelectedContent = () => {
        switch (contenttype) {
            case 'webs':
                return <Webs setContent={setContent}/>;
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