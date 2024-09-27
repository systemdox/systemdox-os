import React from 'react';
import { ChevronDown, ChevronRight, Shield, FileText, Code } from 'lucide-react';

const TreeNode = ({ label, children, level }) => {
    const [isOpen, setIsOpen] = React.useState(true);

    if (level === 3) {
        let Icon;
        switch (label) {
            case "Security":
                Icon = Shield;
                break;
            case "Business Scenario":
                Icon = FileText;
                break;
            case "API Specs":
                Icon = Code;
                break;
            default:
                Icon = FileText;
        }

        return (
            <button className="flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors w-full">
                <Icon size={16} className="mr-2" />
                {label}
            </button>
        );
    }

    return (
        <div className="w-full mb-4">
            <div className="flex items-center cursor-pointer mb-2" onClick={() => setIsOpen(!isOpen)}>
                {children && (isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />)}
                <span className="ml-2 font-semibold text-lg">{label}</span>
            </div>
            {isOpen && children && (
                <div className="ml-6">
                    {children}
                </div>
            )}
        </div>
    );
};

const PyramidLevel = ({ items }) => (
    <div className="flex justify-center space-x-4 mb-4">
        {items.map((item, index) => (
            <TreeNode key={index} label={item} level={3} />
        ))}
    </div>
);

const HierarchicalStructure = () => {
    return (
        <div className="p-4 max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-center">Hierarchical Structure</h1>
            <div className="border p-6 rounded-lg shadow-md">
                <TreeNode label="Architecture Vision" level={1}>
                    <TreeNode label="ADRs" level={2} />
                    <TreeNode label="System Solution" level={2}>
                        <PyramidLevel items={["Security"]} />
                        <PyramidLevel items={["Business Scenario", "API Specs"]} />
                    </TreeNode>
                    <TreeNode label="Initiative Solutions" level={2}>
                        <PyramidLevel items={["Security"]} />
                        <PyramidLevel items={["Business Scenario", "API Specs"]} />
                    </TreeNode>
                </TreeNode>
            </div>
        </div>
    );
};

export default HierarchicalStructure;