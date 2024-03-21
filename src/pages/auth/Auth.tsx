import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsTrigger, TabsContent, TabsList } from '@/components/ui/tabs';
import { AuthDataProps } from '@/pages/interfaces/interfaces';

const Auth = () => {
  const [formData, setFormData] = useState<AuthDataProps | {}>({});

  const handleSignin = () => {
    console.log(formData);
  }
  const handleLogin = () => {
    console.log(formData);
  }
  return (
    <div className='mt-20 flex flex-row justify-center content-center '>
      <Tabs defaultValue="Login" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="Login">Login</TabsTrigger>
        <TabsTrigger value="singup">Sign Up</TabsTrigger>
      </TabsList>
      <TabsContent value="Login">
        <Card>
          <CardHeader>
            <CardTitle>Login in to your account</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1 justify-start">
              <Label htmlFor="username">Username/Email</Label>
              <Input 
                name="username" 
                onChange={(e) => setFormData(prev => ({...prev, username: e.target.value}))} 
                placeholder="@peduarte" 
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input 
                type='password' 
                placeholder='somerandom' 
                onChange={(e) => setFormData(prev => ({...prev, password: e.target.value}))} 
                name="password" 
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleLogin}>LogIn</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="singup">
        <Card>
          <CardHeader>
            <CardTitle>Create a new account</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input 
                name="username"
                onChange={(e) => setFormData(prev => ({...prev, username: e.target.value}))} 
                placeholder="@peduarte" 
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input
                name="email" 
                placeholder="expamle@gmail.com" 
                onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))} 
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input
                name="password" 
                placeholder='somerandom' 
                type="password" 
                onChange={(e) => setFormData(prev => ({...prev, password: e.target.value}))} 
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">Confirm Password</Label>
              <Input
                name="confirm_password" 
                placeholder='somerandom' 
                onChange={(e) => setFormData(prev => ({...prev, confirm_password: e.target.value}))} 
                type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleSignin}>Sign Up</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
    </div>
  )
}

export default Auth;