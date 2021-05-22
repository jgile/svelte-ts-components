import Countdown from '../src/components/Countdown.svelte';

let targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 10);

export default {
	title: 'Countdown',
	component: Countdown,
	argTypes: {
		timestamp: { control: 'number' },
	},
};

const Template = ({ ...args }) => ({
	Component: Countdown,
	props: args,
});

export const Default = Template.bind({});
Default.args = {timestamp: targetDate.getTime()};
