import {useNavigate} from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupsPage() {
    const navigate = useNavigate();

    function addMeetupHandler(meetupData) {
        fetch('https://react-getting-started-129e9-default-rtdb.firebaseio.com/meetups.json',
        {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        ).then(()=> {
            navigate('/');
        });
    }
    return (
<section>
    <h1>New Meetups page</h1>
    <NewMeetupForm onAddMeetup={addMeetupHandler}/>
</section>
    );
}

export default NewMeetupsPage;