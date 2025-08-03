#!/bin/bash

# Portfolio Website Development Server
echo "🚀 Starting Portfolio Website Development Server..."
echo "📁 Project: Modern Portfolio Website"
echo "🌐 URL: http://localhost:3000"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "   Download from: https://nodejs.org/"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

echo "✅ Dependencies ready!"
echo "🔧 Starting live server..."
echo ""
echo "The server will:"
echo "  - Watch for file changes in src/ and assets/"
echo "  - Automatically reload the browser"
echo "  - Serve on http://localhost:3000"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Start the development server
npm run dev