export interface RconStatus {
	currentMap: string;
	raw?: string;
	players: [
		{
			name: string;
			address: string;
			cl: number;
			score: number;
			ping: number;
			rate: number;
		}
	];
}
