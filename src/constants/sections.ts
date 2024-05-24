interface SectionsProps extends Record<string, string> {}

export const sections: NonNullable<SectionsProps>[] = [
	{
		title: "Create Your Index",
		description:
			"Mix standard ERC20s, LP tokens, and lending tokens from Fantom's leading protocols such as SpookySwap, Equalizer, Beethoven X, Polter Finance and more. Our platform allows you to create customized index tokens that represent a diversified portfolio, enhancing your investment strategy with a blend of different assets.",
	},
	{
		title: "Manage with Ease",
		description:
			"Rebalance your index with our intuitive swapping features to adjust to market conditions and optimize returns. Our platform's user-friendly interface makes it simple to swap assets within your index, ensuring your portfolio remains aligned with your investment goals and market trends.",
	},
	{
		title: "Earn More",
		description:
			"Stake your index tokens containing LP tokens to earn extra rewards like governance tokens ($BOO, $EQUAL, $BEETS), automatically staked for multiplied gains. Take advantage of the staking opportunities to increase your returns through additional rewards, emissions, and bribes.",
	},
	{
		title: "Flexible Investments",
		description:
			"Join or exit funds smoothly using any ERC20 tokens, or directly with the underlying assets. Our platform provides seamless entry and exit options, allowing you to manage your investments with ease and flexibility, whether you're using the index tokens or the underlying assets.",
	},
	{
		title: "Automate Your Strategy",
		description:
			"Implement Dollar Cost Averaging (DCA) to automatically adjust your investments according to your chosen frequency and amount. Automate your investment strategy to consistently build your portfolio over time, reducing the impact of market volatility and optimizing your investment process.",
	},
	{
		title: "Maximize Returns",
		description:
			"Opt to earn rewards in their normal form, swap them for any token, or compound them into your position for enhanced yields. Customize how you receive your rewards to best fit your investment strategy, whether it's reinvesting for compound growth or converting to other assets.",
	},
];
