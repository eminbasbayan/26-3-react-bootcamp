import { useNavigate } from 'react-router-dom';
import Button from '../components/UI/Button';

const NotFound = () => {
  const navigate = useNavigate();
  
  return (
    <div>
      <h1>404 NotFound</h1>
      <Button onClick={() => navigate('/')}>Ana Sayfaya Dön</Button>
    </div>
  );
};

export default NotFound;
