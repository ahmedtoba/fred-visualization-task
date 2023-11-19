import { useNavigate } from '@tanstack/react-location';
import { Button, Result } from 'antd';
import { ROUTES } from '../../Enums/routes';

export default function NotFound() {
	const navigate = useNavigate();

	const goHome = () => {
		navigate({ to: `/${ROUTES.BAR_CHART}` })
	};

	return (
		<Result
			status="404"
			title="404"
			subTitle="Sorry, the page you visited does not exist."
			extra={<Button type="primary" onClick={goHome}>Back Home</Button>}
		/>
	);
}