import { NextRequest, NextResponse } from 'next/server';
import { getUserByEmail } from '@/app/data/users';

export async function POST(request: NextRequest) {
    const { email, password } = await request.json();

    const user = getUserByEmail(email);

    if (!user) {
        return NextResponse.json( { status: false, msg: 'User not found' });
    }

    const isAuth = user.password === password;
    
    if (!isAuth) {
        return NextResponse.json( { status: false, msg: 'User/password incorrect' });
    }

    return NextResponse.json( { status: true, user });
}