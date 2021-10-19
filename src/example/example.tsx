import React from 'react';

export type ExampleProps = {
	text?: string;
};

const Example = (props: ExampleProps) => (
	<p>
		{props.text ?? 'Hi'}
		<style jsx>{`
			p {
				color: red;
			}
		`}</style>
	</p>
);

export default Example;
