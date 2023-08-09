import { Input, Form } from 'components/form';
import { AdaptiveContainer } from 'components/container';
import { CustomButton } from 'components/ui/Button';

const Home = () => {
    return (
        <AdaptiveContainer>
            <Form>
                <Input />
                <CustomButton sx={{ mt: 4, width: '100%' }}>
                    Get status TTN
                </CustomButton>
            </Form>
        </AdaptiveContainer>
    );
};

export default Home;
