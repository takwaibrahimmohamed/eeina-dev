import React, { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { TopCreatorsSection } from "../Home/sections/TopCreatorsSection";
import { AdSection } from "../Home/sections/AdSection";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Badge } from "../../components/ui/badge";
import { Separator } from "../../components/ui/separator";
import { 
  ShoppingCart,
  Plus,
  Minus,
  Check,
  X,
  Search,
  Filter,
  Share2,
  Download,
  Trash2,
  Edit3,
  Calendar,
  Clock,
  Users,
  ChefHat,
  FileText,
  Mail,
  MessageSquare,
  Copy,
  Printer
} from "lucide-react";
import { Link } from "react-router-dom";

export const ShoppingList = (): JSX.Element => {
  const { t, isRTL, language } = useLanguage();
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [editingItem, setEditingItem] = useState<number | null>(null);
  const [editValue, setEditValue] = useState('');
  const [showShareModal, setShowShareModal] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);
  const [newItemText, setNewItemText] = useState('');

  // Sample shopping list data (would come from recipe ingredients)
  const [shoppingListItems, setShoppingListItems] = useState([
    {
      id: 1,
      item: "2 pieces Chicken Breasts",
      category: "Meat & Poultry",
      quantity: "2 pieces",
      ingredient: "Chicken Breasts",
      addedFrom: "Creamy Porcini Mushroom Polenta",
      recipeId: 1,
      addedDate: "2024-01-15",
      priority: "high"
    },
    {
      id: 2,
      item: "300g Ground Beef",
      category: "Meat & Poultry",
      quantity: "300g",
      ingredient: "Ground Beef",
      addedFrom: "Spicy Thai Basil Chicken",
      recipeId: 2,
      addedDate: "2024-01-15",
      priority: "medium"
    },
    {
      id: 3,
      item: "4 Eggs (free range)",
      category: "Dairy & Eggs",
      quantity: "4",
      ingredient: "Eggs",
      addedFrom: "Fluffy Pancakes with Berries",
      recipeId: 4,
      addedDate: "2024-01-14",
      priority: "high"
    },
    {
      id: 4,
      item: "1 tsp Paprika",
      category: "Spices & Herbs",
      quantity: "1 tsp",
      ingredient: "Paprika",
      addedFrom: "Mediterranean Quinoa Bowl",
      recipeId: 5,
      addedDate: "2024-01-14",
      priority: "low"
    },
    {
      id: 5,
      item: "0.5 cup Chopped Walnuts",
      category: "Nuts & Seeds",
      quantity: "0.5 cup",
      ingredient: "Walnuts",
      addedFrom: "Chocolate Lava Cake",
      recipeId: 6,
      addedDate: "2024-01-13",
      priority: "medium"
    },
    {
      id: 6,
      item: "Fresh Basil Leaves",
      category: "Fresh Herbs",
      quantity: "1 bunch",
      ingredient: "Basil",
      addedFrom: "Classic Margherita Pizza",
      recipeId: 3,
      addedDate: "2024-01-13",
      priority: "high"
    },
    {
      id: 7,
      item: "2 cups Quinoa",
      category: "Grains & Rice",
      quantity: "2 cups",
      ingredient: "Quinoa",
      addedFrom: "Mediterranean Quinoa Bowl",
      recipeId: 5,
      addedDate: "2024-01-12",
      priority: "medium"
    },
    {
      id: 8,
      item: "1 lb Fresh Mozzarella",
      category: "Dairy & Eggs",
      quantity: "1 lb",
      ingredient: "Mozzarella Cheese",
      addedFrom: "Classic Margherita Pizza",
      recipeId: 3,
      addedDate: "2024-01-12",
      priority: "high"
    }
  ]);

  // Sample recipe data for "Added From" links
  const recipes = {
    1: { name: "Creamy Porcini Mushroom Polenta", image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" },
    2: { name: "Spicy Thai Basil Chicken", image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" },
    3: { name: "Classic Margherita Pizza", image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" },
    4: { name: "Fluffy Pancakes with Berries", image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" },
    5: { name: "Mediterranean Quinoa Bowl", image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" },
    6: { name: "Chocolate Lava Cake", image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" }
  };

  const categories = ["All", "Meat & Poultry", "Dairy & Eggs", "Spices & Herbs", "Nuts & Seeds", "Fresh Herbs", "Grains & Rice"];

  const filteredItems = shoppingListItems.filter(item => {
    const matchesSearch = item.item.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.ingredient.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.addedFrom.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleItem = (id: number) => {
    setCheckedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const startEditing = (id: number, currentValue: string) => {
    setEditingItem(id);
    setEditValue(currentValue);
  };

  const saveEdit = () => {
    // Here you would update the item in your state/backend
    console.log(`Updated item ${editingItem} to: ${editValue}`);
    setEditingItem(null);
    setEditValue('');
  };

  const cancelEdit = () => {
    setEditingItem(null);
    setEditValue('');
  };

  const removeItem = (id: number) => {
    // Here you would remove the item from your state/backend
    setShoppingListItems(prev => prev.filter(item => item.id !== id));
  };

  const clearCompleted = () => {
    // Here you would remove all checked items
    console.log('Cleared completed items:', checkedItems);
    setCheckedItems([]);
  };

  const addNewItem = () => {
    if (newItemText.trim()) {
      const newItem = {
        id: Math.max(...shoppingListItems.map(item => item.id)) + 1,
        item: newItemText.trim(),
        category: "Custom",
        quantity: "1",
        ingredient: newItemText.trim(),
        addedFrom: "Manual Entry",
        recipeId: 0,
        addedDate: new Date().toISOString().split('T')[0],
        priority: "medium"
      };
      setShoppingListItems(prev => [...prev, newItem]);
      setNewItemText('');
    }
  };

  const handleShare = (method: string) => {
    const listText = filteredItems.map(item => 
      `${checkedItems.includes(item.id) ? '✓' : '○'} ${item.item}`
    ).join('\n');
    
    const shareText = `My EEINA Shopping List:\n\n${listText}\n\nCreated with EEINA Food App`;
    
    switch (method) {
      case 'copy':
        navigator.clipboard.writeText(shareText);
        alert('Shopping list copied to clipboard!');
        break;
      case 'email':
        window.open(`mailto:?subject=My EEINA Shopping List&body=${encodeURIComponent(shareText)}`);
        break;
      case 'sms':
        window.open(`sms:?body=${encodeURIComponent(shareText)}`);
        break;
      default:
        console.log('Share method not implemented:', method);
    }
    setShowShareModal(false);
  };

  const completedCount = checkedItems.length;
  const totalCount = filteredItems.length;
  const completionPercentage = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  const generatePDF = () => {
    // Group items by category for better organization
    const itemsByCategory = {};
    filteredItems.forEach(item => {
      if (!itemsByCategory[item.category]) {
        itemsByCategory[item.category] = [];
      }
      itemsByCategory[item.category].push(item);
    });

    // Debug logging
    console.log('Filtered items for PDF:', filteredItems);
    console.log('Items by category:', itemsByCategory);
    console.log('Checked items:', checkedItems);

    // Create a complete HTML document for PDF generation
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>EEINA Shopping List - ${new Date().toLocaleDateString()}</title>
        <style>
          body { 
            font-family: Arial, sans-serif; 
            margin: 20px; 
            color: #333;
            line-height: 1.6;
            background: white;
          }
          .header { 
            text-align: center; 
            margin-bottom: 30px; 
            border-bottom: 3px solid #22ae4b;
            padding-bottom: 15px;
          }
          .logo { 
            background: #22ae4b; 
            color: white; 
            padding: 8px 16px; 
            border-radius: 8px; 
            font-weight: bold; 
            font-size: 20px;
            display: inline-block;
            margin-bottom: 8px;
          }
          .date { color: #666; font-size: 14px; }
          .stats {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 25px;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
          }
          .stat {
            text-align: center;
            padding: 10px;
          }
          .stat-number {
            font-size: 18px;
            font-weight: bold;
            color: #22ae4b;
            display: block;
          }
          .stat-label {
            font-size: 12px;
            color: #666;
            text-transform: uppercase;
            margin-top: 3px;
          }
          .category {
            margin-bottom: 25px;
          }
          .category-title {
            font-size: 16px;
            font-weight: bold;
            color: #22ae4b;
            margin-bottom: 12px;
            padding-bottom: 4px;
            border-bottom: 1px solid #eee;
          }
          .item {
            display: flex;
            align-items: center;
            padding: 8px 0;
            border-bottom: 1px solid #f0f0f0;
          }
          .checkbox {
            width: 16px;
            height: 16px;
            border: 2px solid #22ae4b;
            border-radius: 3px;
            margin-right: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            color: #22ae4b;
            font-size: 12px;
          }
          .item-text {
            font-size: 14px;
          }
          .item-source {
            font-size: 12px;
            color: #666;
            font-style: italic;
            margin-top: 2px;
          }
          .completed {
            text-decoration: line-through;
            color: #999;
          }
          .no-items {
            text-align: center;
            padding: 40px;
            color: #666;
          }
          .footer {
            margin-top: 30px;
            text-align: center;
            color: #666;
            font-size: 12px;
            border-top: 1px solid #eee;
            padding-top: 15px;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="logo">EEINA</div>
          <h1 style="margin: 10px 0;">Shopping List</h1>
          <div class="date">Generated on ${new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</div>
        </div>
        
        <div class="stats">
          <div class="stat">
            <span class="stat-number">${filteredItems.length}</span>
            <div class="stat-label">Total Items</div>
          </div>
          <div class="stat">
            <span class="stat-number">${completedCount}</span>
            <div class="stat-label">Completed</div>
          </div>
          <div class="stat">
            <span class="stat-number">${filteredItems.length - completedCount}</span>
            <div class="stat-label">Remaining</div>
          </div>
          <div class="stat">
            <span class="stat-number">${Math.round(completionPercentage)}%</span>
            <div class="stat-label">Progress</div>
          </div>
        </div>
        
        ${filteredItems.length > 0 ? 
          Object.keys(itemsByCategory).map(category => {
            const categoryItems = itemsByCategory[category];
            if (!categoryItems || categoryItems.length === 0) return '';
            
            return `
              <div class="category">
                <div class="category-title">${category}</div>
                ${categoryItems.map(item => `
                  <div class="item">
                    <div class="checkbox">${checkedItems.includes(item.id) ? '✓' : ''}</div>
                    <div class="item-text">
                      <div class="${checkedItems.includes(item.id) ? 'completed' : ''}">${item.item}</div>
                      <div class="item-source">From: ${item.addedFrom}</div>
                    </div>
                  </div>
                `).join('')}
              </div>
            `;
          }).join('') 
          : 
          `<div class="no-items">
            <h3>No items in your shopping list</h3>
            <p>Add some recipes to generate your shopping list!</p>
          </div>`
        }
        
        ${filteredItems.length > 0 ? `
          <div style="margin-top: 20px; padding: 15px; background: #f8f9fa; border-radius: 8px;">
            <h4 style="margin: 0 0 10px 0; color: #22ae4b;">Shopping Summary:</h4>
            <p style="margin: 5px 0; font-size: 14px;">• Total items to buy: ${filteredItems.length}</p>
            <p style="margin: 5px 0; font-size: 14px;">• Items completed: ${completedCount}</p>
            <p style="margin: 5px 0; font-size: 14px;">• Items remaining: ${filteredItems.length - completedCount}</p>
            <p style="margin: 5px 0; font-size: 14px;">• Progress: ${Math.round(completionPercentage)}% complete</p>
          </div>
        ` : ''}
        
        <div class="footer">
          <p><strong>Created with EEINA Food App</strong></p>
          <p>Discover amazing recipes and plan your meals</p>
          <p>© ${new Date().getFullYear()} EEINA. All rights reserved.</p>
        </div>
      </body>
      </html>
    `;
    
    // Debug the generated content
    console.log('Generated HTML content preview:', htmlContent.substring(0, 500));
    console.log('Total HTML length:', htmlContent.length);
    
    // Create blob with proper MIME type and download
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `EEINA-Shopping-List-${new Date().toISOString().split('T')[0]}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    console.log('PDF generation completed - file downloaded');
  };

  const exportToCSV = () => {
    const csvContent = [
      ['Item', 'Category', 'Quantity', 'Status', 'Added From', 'Date Added'],
      ...filteredItems.map(item => [
        item.item,
        item.category,
        item.quantity,
        checkedItems.includes(item.id) ? 'Completed' : 'Pending',
        item.addedFrom,
        item.addedDate
      ])
    ].map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `EEINA-Shopping-List-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const printList = () => {
    // Group items by category for better organization
    const itemsByCategory = {};
    filteredItems.forEach(item => {
      if (!itemsByCategory[item.category]) {
        itemsByCategory[item.category] = [];
      }
      itemsByCategory[item.category].push(item);
    });

    // Create HTML content for the popup
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>EEINA Shopping List - ${new Date().toLocaleDateString()}</title>
        <style>
          body { 
            font-family: Arial, sans-serif; 
            margin: 20px; 
            color: #333;
            line-height: 1.6;
            background: white;
          }
          .header { 
            text-align: center; 
            margin-bottom: 30px; 
            border-bottom: 3px solid #22ae4b;
            padding-bottom: 15px;
          }
          .logo { 
            background: #22ae4b; 
            color: white; 
            padding: 8px 16px; 
            border-radius: 8px; 
            font-weight: bold; 
            font-size: 20px;
            display: inline-block;
            margin-bottom: 8px;
          }
          .date { color: #666; font-size: 14px; }
          .stats {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 25px;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
          }
          .stat {
            text-align: center;
            padding: 10px;
          }
          .stat-number {
            font-size: 18px;
            font-weight: bold;
            color: #22ae4b;
            display: block;
          }
          .stat-label {
            font-size: 12px;
            color: #666;
            text-transform: uppercase;
            margin-top: 3px;
          }
          .category {
            margin-bottom: 25px;
          }
          .category-title {
            font-size: 16px;
            font-weight: bold;
            color: #22ae4b;
            margin-bottom: 12px;
            padding-bottom: 4px;
            border-bottom: 1px solid #eee;
          }
          .item {
            display: flex;
            align-items: center;
            padding: 8px 0;
            border-bottom: 1px solid #f0f0f0;
          }
          .checkbox {
            width: 16px;
            height: 16px;
            border: 2px solid #22ae4b;
            border-radius: 3px;
            margin-right: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            color: #22ae4b;
            font-size: 12px;
          }
          .item-text {
            font-size: 14px;
          }
          .item-source {
            font-size: 12px;
            color: #666;
            font-style: italic;
            margin-top: 2px;
          }
          .completed {
            text-decoration: line-through;
            color: #999;
          }
          .no-items {
            text-align: center;
            padding: 40px;
            color: #666;
          }
          .footer {
            margin-top: 30px;
            text-align: center;
            color: #666;
            font-size: 12px;
            border-top: 1px solid #eee;
            padding-top: 15px;
          }
          .print-button {
            background: #22ae4b;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 14px;
            margin: 20px auto;
            display: block;
          }
          .print-button:hover {
            background: #1c9a40;
          }
          @media print {
            .print-button { display: none !important; }
          }
        </style>
      </head>
      <body>
        <div style="text-align: center; margin-bottom: 30px; border-bottom: 3px solid #22ae4b; padding-bottom: 20px;">
          <div class="logo">EEINA</div>
          <h1 style="margin: 10px 0;">Shopping List</h1>
          <div class="date">Generated on ${new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</div>
        </div>
        
        <div class="stats">
          <div class="stat">
            <span class="stat-number">${filteredItems.length}</span>
            <div class="stat-label">Total Items</div>
          </div>
          <div class="stat">
            <span class="stat-number">${completedCount}</span>
            <div class="stat-label">Completed</div>
          </div>
          <div class="stat">
            <span class="stat-number">${filteredItems.length - completedCount}</span>
            <div class="stat-label">Remaining</div>
          </div>
          <div class="stat">
            <span class="stat-number">${Math.round(completionPercentage)}%</span>
            <div class="stat-label">Progress</div>
          </div>
        </div>
        
        <button class="print-button" onclick="window.print()">🖨️ Print This List</button>
        
        ${filteredItems.length > 0 ? 
          Object.keys(itemsByCategory).map(category => {
            const categoryItems = itemsByCategory[category];
            if (!categoryItems || categoryItems.length === 0) return '';
            
            return `
              <div class="category">
                <div class="category-title">${category}</div>
                ${categoryItems.map(item => `
                  <div class="item">
                    <div class="checkbox">${checkedItems.includes(item.id) ? '✓' : ''}</div>
                    <div class="item-text">
                      <div class="${checkedItems.includes(item.id) ? 'completed' : ''}">${item.item}</div>
                      <div class="item-source">From: ${item.addedFrom}</div>
                    </div>
                  </div>
                `).join('')}
              </div>
            `;
          }).join('') 
          : 
          `<div class="no-items">
            <h3>No items in your shopping list</h3>
            <p>Add some recipes to generate your shopping list!</p>
          </div>`
        }
        
        <div class="footer">
          <p><strong>Created with EEINA Food App</strong></p>
          <p>Discover amazing recipes and plan your meals</p>
          <p>© ${new Date().getFullYear()} EEINA. All rights reserved.</p>
        </div>
      </body>
      </html>
    `;

    // Open popup window
    const printWindow = window.open('', '_blank', 'width=800,height=600,scrollbars=yes,resizable=yes');
    
    if (printWindow) {
      printWindow.document.write(htmlContent);
      printWindow.document.close();
      
      // Focus the new window
      printWindow.focus();
      
      // Optional: Auto-print after a short delay
      setTimeout(() => {
        if (!printWindow.closed) {
          printWindow.print();
        }
      }, 500);
    } else {
      // Fallback if popup is blocked
      alert('Popup blocked! Please allow popups for this site to use the print feature.');
      
      // Create blob and download as HTML file as fallback
      const blob = new Blob([htmlContent], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `EEINA-Shopping-List-${new Date().toISOString().split('T')[0]}.html`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  const oldPrintList = () => {
    // Create a temporary div with print styles
    const printContent = document.createElement('div');
    printContent.innerHTML = `
      <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.4;">
        <div style="text-align: center; margin-bottom: 30px; border-bottom: 3px solid #22ae4b; padding-bottom: 20px;">
          <div style="background: #22ae4b; color: white; padding: 10px 20px; border-radius: 8px; font-weight: bold; font-size: 24px; display: inline-block; margin-bottom: 10px;">EEINA</div>
          <h1 style="margin: 10px 0;">Shopping List</h1>
          <div style="color: #666; font-size: 14px;">Generated on ${new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</div>
        </div>
        
        <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin-bottom: 25px; text-align: center;">
          <div style="display: flex; justify-content: space-around; flex-wrap: wrap;">
            <div style="margin: 5px;">
              <div style="font-size: 20px; font-weight: bold; color: #22ae4b;">${filteredItems.length}</div>
              <div style="font-size: 11px; color: #666; text-transform: uppercase;">Total Items</div>
            </div>
            <div style="margin: 5px;">
              <div style="font-size: 20px; font-weight: bold; color: #22ae4b;">${completedCount}</div>
              <div style="font-size: 11px; color: #666; text-transform: uppercase;">Completed</div>
            </div>
            <div style="margin: 5px;">
              <div style="font-size: 20px; font-weight: bold; color: #22ae4b;">${filteredItems.length - completedCount}</div>
              <div style="font-size: 11px; color: #666; text-transform: uppercase;">Remaining</div>
            </div>
            <div style="margin: 5px;">
              <div style="font-size: 20px; font-weight: bold; color: #22ae4b;">${completionPercentage.toFixed(0)}%</div>
              <div style="font-size: 11px; color: #666; text-transform: uppercase;">Progress</div>
            </div>
          </div>
        </div>
        
        ${categories.filter(cat => cat !== "All").map(category => {
          const categoryItems = filteredItems.filter(item => item.category === category);
          if (categoryItems.length === 0) return '';
          
          return `
            <div style="margin-bottom: 25px;">
              <div style="font-size: 16px; font-weight: bold; color: #22ae4b; margin-bottom: 10px; padding-bottom: 5px; border-bottom: 1px solid #eee;">${category}</div>
              ${categoryItems.map(item => `
                <div style="display: flex; align-items: flex-start; padding: 8px 0; border-bottom: 1px solid #f0f0f0;">
                  <div style="width: 16px; height: 16px; border: 2px solid #22ae4b; border-radius: 3px; margin-right: 12px; display: flex; align-items: center; justify-content: center; font-weight: bold; color: #22ae4b; font-size: 12px; flex-shrink: 0; margin-top: 2px;">${checkedItems.includes(item.id) ? '✓' : ''}</div>
                  <div style="flex: 1;">
                    <div style="font-size: 14px; margin-bottom: 2px; ${checkedItems.includes(item.id) ? 'text-decoration: line-through; color: #999;' : ''}">${item.item}</div>
                    <div style="font-size: 11px; color: #666; font-style: italic;">From: ${item.addedFrom}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          `;
        }).join('')}
        
        <div style="margin-top: 30px; text-align: center; color: #666; font-size: 11px; border-top: 1px solid #eee; padding-top: 15px;">
          <p><strong>Created with EEINA Food App</strong></p>
          <p>Discover amazing recipes and plan your meals</p>
          <p>© ${new Date().getFullYear()} EEINA. All rights reserved.</p>
        </div>
      </div>
    `;

    // Add print styles to the document
    const printStyles = document.createElement('style');
    printStyles.innerHTML = `
      @media print {
        body * { visibility: hidden; }
        .print-content, .print-content * { visibility: visible; }
        .print-content { 
          position: absolute; 
          left: 0; 
          top: 0; 
          width: 100%; 
          margin: 0;
          padding: 20px;
        }
        .no-print { display: none !important; }
      }
    `;
    
    // Add the print content to the document
    printContent.className = 'print-content';
    printContent.style.display = 'none';
    document.body.appendChild(printStyles);
    document.body.appendChild(printContent);
    
    // Print the document
    window.print();
    
    // Clean up after printing
    setTimeout(() => {
      document.body.removeChild(printStyles);
      document.body.removeChild(printContent);
    }, 1000);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const ShareModal = () => (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md bg-white shadow-2xl">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">Share Shopping List</h3>
            <Button variant="ghost" size="icon" onClick={() => setShowShareModal(false)}>
              <X className="w-4 h-4" />
            </Button>
          </div>
          <div className="space-y-3">
            <Button 
              onClick={() => handleShare('copy')}
              className="w-full justify-start bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200"
            >
              <Copy className="w-4 h-4 mr-3" />
              Copy to Clipboard
            </Button>
            <Button 
              onClick={() => handleShare('email')}
              className="w-full justify-start bg-green-50 hover:bg-green-100 text-green-700 border-green-200"
            >
              <Mail className="w-4 h-4 mr-3" />
              Share via Email
            </Button>
            <Button 
              onClick={() => handleShare('sms')}
              className="w-full justify-start bg-purple-50 hover:bg-purple-100 text-purple-700 border-purple-200"
            >
              <MessageSquare className="w-4 h-4 mr-3" />
              Share via SMS
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const ExportModal = () => (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md bg-white shadow-2xl">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">Export Shopping List</h3>
            <Button variant="ghost" size="icon" onClick={() => setShowExportModal(false)}>
              <X className="w-4 h-4" />
            </Button>
          </div>
          <div className="space-y-3">
            <Button 
              onClick={() => { generatePDF(); setShowExportModal(false); }}
              className="w-full justify-start bg-red-50 hover:bg-red-100 text-red-700 border-red-200"
            >
              <FileText className="w-4 h-4 mr-3" />
              Download as PDF (HTML)
            </Button>
            <Button 
              onClick={() => { exportToCSV(); setShowExportModal(false); }}
              className="w-full justify-start bg-green-50 hover:bg-green-100 text-green-700 border-green-200"
            >
              <Download className="w-4 h-4 mr-3" />
              Export as CSV
            </Button>
            <Button 
              onClick={() => { printList(); setShowExportModal(false); }}
              className="w-full justify-start bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200"
            >
              <Printer className="w-4 h-4 mr-3" />
              Print List
            </Button>
          </div>
          <div className="mt-4 p-3 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              All exports include EEINA branding and your current list status.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <TopCreatorsSection />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <ShoppingCart className="w-8 h-8 text-[#22ae4b]" />
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{t.shopping_list.title}</h1>
          </div>
          <p className="text-gray-600">{language === 'ar' ? `المكونات من وصفاتك المحفوظة (${totalCount} عنصر)` : `Ingredients from your saved recipes (${totalCount} items)`}</p>
        </div>

        {/* Progress Bar */}
        <Card className="mb-8">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900">{t.shopping_list.shopping_progress}</h3>
                <p className="text-sm sm:text-base text-gray-600">{completedCount} {language === 'ar' ? 'من' : 'of'} {totalCount} {t.shopping_list.items_completed}</p>
              </div>
              <div className="text-right">
                <div className="text-xl sm:text-2xl font-bold text-[#22ae4b]">{completionPercentage.toFixed(0)}%</div>
                <div className="text-sm text-gray-500">{language === 'ar' ? 'مكتمل' : 'Complete'}</div>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="h-3 rounded-full bg-[#22ae4b] transition-all duration-300"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
          {/* Main Shopping List */}
          <div className="lg:col-span-8">
            {/* Search and Filters */}
            <Card className="mb-6">
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col gap-4">
                  {/* Search */}
                  <div className="relative w-full sm:max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder={language === 'ar' ? 'البحث في المكونات...' : 'Search ingredients...'}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className={`${isRTL ? 'pr-10 text-right' : 'pl-10 text-left'} border-gray-200 focus:border-[#22ae4b] focus:ring-[#22ae4b]`}
                    />
                  </div>

                  {/* Category Filter */}
                  <div className="flex items-center gap-2 flex-wrap">
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(category)}
                        className={selectedCategory === category 
                          ? "bg-[#22ae4b] hover:bg-[#1c9a40] text-white" 
                          : "border-gray-200 hover:border-[#22ae4b] hover:text-[#22ae4b]"
                        }
                      >
                        {category}
                      </Button>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 justify-end sm:justify-start">
                    <Button variant="outline" size="sm" onClick={() => setShowShareModal(true)}>
                      <Share2 className="w-4 h-4 mr-2" />
                      <span className="hidden sm:inline">{t.shopping_list.share_list}</span>
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => setShowExportModal(true)}>
                      <Download className="w-4 h-4 mr-2" />
                      <span className="hidden sm:inline">{t.shopping_list.export_list}</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Shopping List Items */}
            <Card>
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">{language === 'ar' ? 'عناصرك' : 'Your Items'}</h3>
                  {completedCount > 0 && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={clearCompleted}
                      className="text-red-600 border-red-200 hover:bg-red-50"
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      <span className="hidden sm:inline">{t.shopping_list.clear_completed} ({completedCount})</span>
                      <span className="sm:hidden">{language === 'ar' ? 'مسح' : 'Clear'} ({completedCount})</span>
                    </Button>
                  )}
                </div>

                <div className="space-y-4">
                  {filteredItems.map((item) => (
                    <div
                      key={item.id}
                      className={`flex items-start sm:items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg border transition-all ${
                        checkedItems.includes(item.id)
                          ? 'bg-gray-50 border-gray-200'
                          : 'bg-white border-gray-200 hover:border-[#22ae4b]'
                      }`}
                    >
                      {/* Checkbox */}
                      <div
                        className={`w-6 h-6 rounded border-2 flex items-center justify-center cursor-pointer transition-all ${
                          checkedItems.includes(item.id)
                            ? 'bg-[#22ae4b] border-[#22ae4b]'
                            : 'border-gray-300 hover:border-[#22ae4b]'
                        }`}
                        onClick={() => toggleItem(item.id)}
                      >
                        {checkedItems.includes(item.id) && (
                          <Check className="w-4 h-4 text-white" />
                        )}
                      </div>

                      {/* Item Details */}
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                          {editingItem === item.id ? (
                            <div className="flex items-center gap-2 flex-1">
                              <Input
                                value={editValue}
                                onChange={(e) => setEditValue(e.target.value)}
                                className="flex-1"
                                autoFocus
                              />
                              <Button size="sm" onClick={saveEdit} className="bg-[#22ae4b] hover:bg-[#1c9a40]">
                                <Check className="w-4 h-4" />
                              </Button>
                              <Button size="sm" variant="outline" onClick={cancelEdit}>
                                <X className="w-4 h-4" />
                              </Button>
                            </div>
                          ) : (
                            <>
                              <span className={`font-medium ${
                                checkedItems.includes(item.id) 
                                  ? 'line-through text-gray-500' 
                                  : 'text-gray-900'
                              }`}>
                                {item.item}
                              </span>
                              <div className="flex gap-2 flex-wrap">
                                <Badge className={`text-xs ${getPriorityColor(item.priority)}`}>
                                  {item.priority}
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  {item.category}
                                </Badge>
                              </div>
                            </>
                          )}
                        </div>

                        {editingItem !== item.id && (
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600">
                            <Link 
                              to={`/recipe/${item.recipeId}`}
                              className="flex items-center gap-2 hover:text-[#22ae4b] transition-colors"
                            >
                              <img
                                src={recipes[item.recipeId]?.image}
                                alt={item.addedFrom}
                                className="w-6 h-6 rounded object-cover"
                              />
                              <span>From: {item.addedFrom}</span>
                            </Link>
                            <span className="hidden sm:inline">•</span>
                            <span>Added {new Date(item.addedDate).toLocaleDateString()}</span>
                          </div>
                        )}
                      </div>

                      {/* Actions */}
                      {editingItem !== item.id && (
                        <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 flex-shrink-0">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => startEditing(item.id, item.item)}
                            className="text-gray-400 hover:text-gray-600 w-8 h-8"
                          >
                            <Edit3 className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeItem(item.id)}
                            className="text-gray-400 hover:text-red-600 w-8 h-8"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {filteredItems.length === 0 && (
                  <div className="text-center py-12">
                    <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-600 mb-2">{language === 'ar' ? 'لم يتم العثور على عناصر' : 'No items found'}</h3>
                    <p className="text-gray-500">
                      {searchQuery || selectedCategory !== "All" 
                        ? (language === 'ar' ? 'جرب تعديل البحث أو المرشحات' : 'Try adjusting your search or filters')
                        : (language === 'ar' ? 'أضف المكونات من الوصفات لرؤيتها هنا' : 'Add ingredients from recipes to see them here')
                      }
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              {/* Quick Add */}
              <Card>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4">{t.shopping_list.quick_add}</h3>
                  <div className="space-y-3">
                    <Input 
                      placeholder={language === 'ar' ? 'أضف عنصر مخصص...' : 'Add custom item...'}
                      className="border-gray-200"
                      value={newItemText}
                      onChange={(e) => setNewItemText(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && addNewItem()}
                    />
                    <Button 
                      onClick={addNewItem}
                      className="w-full bg-[#22ae4b] hover:bg-[#1c9a40] text-white"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      {t.shopping_list.add_item}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Shopping Stats */}
              <Card>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4">{t.shopping_list.shopping_stats}</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">{t.shopping_list.total_items}</span>
                      <span className="font-semibold text-gray-900">{totalCount}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">{t.shopping_list.completed}</span>
                      <span className="font-semibold text-green-600">{completedCount}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">{t.shopping_list.remaining}</span>
                      <span className="font-semibold text-orange-600">{totalCount - completedCount}</span>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">{t.shopping_list.progress}</span>
                      <span className="font-semibold text-[#22ae4b]">{completionPercentage.toFixed(0)}%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Categories Overview */}
              <Card>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4">{t.shopping_list.categories}</h3>
                  <div className="space-y-3">
                    {categories.filter(cat => cat !== "All").map(category => {
                      const categoryItems = shoppingListItems.filter(item => item.category === category);
                      const categoryCompleted = categoryItems.filter(item => checkedItems.includes(item.id)).length;
                      
                      if (categoryItems.length === 0) return null;
                      
                      return (
                        <div key={category} className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">{category}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-500">
                              {categoryCompleted}/{categoryItems.length}
                            </span>
                            <div className="w-12 h-2 bg-gray-200 rounded-full">
                              <div 
                                className="h-2 bg-[#22ae4b] rounded-full transition-all"
                                style={{ width: `${categoryItems.length > 0 ? (categoryCompleted / categoryItems.length) * 100 : 0}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {showShareModal && <ShareModal />}
      {showExportModal && <ExportModal />}

      <AdSection />
    </div>
  );
};