import { Link } from 'lucide-react';

import React from 'react';

const Logo = ({ style }: { style: string }) => {
	return <Link className={`${style} x w-6 h-6`} />;
};

export default Logo;
