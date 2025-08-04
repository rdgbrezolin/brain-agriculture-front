#!/bin/bash

echo "🧹 Limpando processos e portas..."

# Parar todos os processos relacionados
echo "🛑 Parando processos Vite..."
pkill -f "vite" 2>/dev/null

echo "🛑 Parando servidores Python..."
pkill -f "python.*http.server" 2>/dev/null

echo "🛑 Parando servidores CORS..."
pkill -f "python.*cors_server" 2>/dev/null

echo "🛑 Parando servidores CORS simplificados..."
pkill -f "python.*simple_cors_server" 2>/dev/null

echo "🛑 Parando processos Node.js relacionados..."
pkill -f "node.*vite" 2>/dev/null

# Verificar se ainda há processos nas portas
echo "🔍 Verificando portas..."
if lsof -i :3001 >/dev/null 2>&1; then
    echo "⚠️  Porta 3001 ainda em uso. Parando processo..."
    lsof -ti :3001 | xargs kill -9 2>/dev/null
fi

if lsof -i :3002 >/dev/null 2>&1; then
    echo "⚠️  Porta 3002 ainda em uso. Parando processo..."
    lsof -ti :3002 | xargs kill -9 2>/dev/null
fi

if lsof -i :5173 >/dev/null 2>&1; then
    echo "⚠️  Porta 5173 ainda em uso. Parando processo..."
    lsof -ti :5173 | xargs kill -9 2>/dev/null
fi

# Aguardar um pouco
sleep 2

# Verificar se as portas estão livres
echo "✅ Verificando se as portas estão livres..."
if ! lsof -i :3001 >/dev/null 2>&1; then
    echo "✅ Porta 3001 livre"
else
    echo "❌ Porta 3001 ainda em uso"
fi

if ! lsof -i :3002 >/dev/null 2>&1; then
    echo "✅ Porta 3002 livre"
else
    echo "❌ Porta 3002 ainda em uso"
fi

if ! lsof -i :5173 >/dev/null 2>&1; then
    echo "✅ Porta 5173 livre"
else
    echo "❌ Porta 5173 ainda em uso"
fi

echo "🧹 Limpeza concluída!" 